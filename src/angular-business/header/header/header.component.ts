import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { FocusMonitor, FocusOrigin, FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, ESCAPE, hasModifierKey, SPACE } from '@angular/cdk/keycodes';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Breakpoints } from '@sbb-esta/angular-core/breakpoints';
import { BehaviorSubject, fromEvent, merge, NEVER, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';

import { SbbAppChooserSection } from '../app-chooser-section/app-chooser-section.component';

import { SBB_HEADER } from './header-token';

/** Result of the toggle promise that indicates the state of the header menu. */
export type SbbHeaderMenuToggleResult = 'open' | 'close';

export type SbbHeaderCollapseBreakpoint =
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'desktopLarge'
  | 'desktopLargePlus'
  | 'desktop4k'
  | 'desktop5k';

const breakpointMapping = {
  mobile: [Breakpoints.Mobile],
  tablet: [Breakpoints.Mobile, Breakpoints.Tablet],
  desktop: [Breakpoints.Mobile, Breakpoints.Tablet, Breakpoints.Desktop],
  desktopLarge: [
    Breakpoints.Mobile,
    Breakpoints.Tablet,
    Breakpoints.Desktop,
    Breakpoints.DesktopLarge,
  ],
  desktopLargePlus: [
    Breakpoints.Mobile,
    Breakpoints.Tablet,
    Breakpoints.Desktop,
    Breakpoints.DesktopLarge,
    Breakpoints.DesktopLargePlus,
  ],
  desktop4k: [
    Breakpoints.Mobile,
    Breakpoints.Tablet,
    Breakpoints.Desktop,
    Breakpoints.DesktopLarge,
    Breakpoints.DesktopLargePlus,
    Breakpoints.Desktop4k,
  ],
  desktop5k: [
    Breakpoints.Mobile,
    Breakpoints.Tablet,
    Breakpoints.Desktop,
    Breakpoints.DesktopLarge,
    Breakpoints.DesktopLargePlus,
    Breakpoints.Desktop4k,
    Breakpoints.Desktop5k,
  ],
};

@Component({
  selector: 'sbb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  exportAs: 'sbbHeader',
  animations: [
    trigger('menu', [
      state(
        'open',
        style({
          left: 0,
        })
      ),
      state(
        'void',
        style({
          left: -305,
          visibility: 'hidden',
        })
      ),
      transition('open => void, void => open', [animate('0.3s ease-in-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SBB_HEADER, useExisting: SbbHeader }],
  host: {
    class: 'sbb-header',
    '[class.sbb-header-opened]': 'this.opened',
    '[class.sbb-header-menus-collapsed]': 'this._menusCollapsed',
  },
})
export class SbbHeader implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  /** Main title shown in the header. */
  @Input() label: string;

  /** Subtitle shown below the main title, if present. */
  @Input() subtitle?: string;

  /**
   * The breakpoint on which to collapse the header menus into the burger menu.
   * Matching the given breakpoint or anything below, will collapse the menus.
   * (e.g. 'tablet' will collapse the menu, if 'tablet' or 'mobile' is matched)
   * See breakpoint documentation for specific values.
   */
  @Input() collapseBreakpoint: SbbHeaderCollapseBreakpoint = 'tablet';

  /**
   * String representing the kind of environment the application is running in.
   * Will be shown in a ribbon, top-left corner of the header.
   * @deprecated Use the sbb-header-environment element. See sbb-header documentation.
   */
  @Input() environment?: string;

  /**
   * Background color for the ribbon, if present.
   * @deprecated Use the sbb-header-environment element. See sbb-header documentation.
   */
  @Input() environmentColor?: string;

  /** Whether the header menu is open. */
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: boolean) {
    this.toggleMenu(coerceBooleanProperty(value));
  }
  private _opened = false;

  /** Emits whenever the header menu has started animating. */
  _animationStarted: Subject<AnimationEvent> = new Subject<AnimationEvent>();

  /** Emits whenever the header menu is done animating. */
  _animationEnd: Subject<AnimationEvent> = new Subject<AnimationEvent>();

  /** Current state of the menu animation. */
  _animationState: 'open' | 'void' = 'void';

  /** Observable of whether the menus are collapsed into the burger menu. */
  _headerMenusCollapsed: Observable<boolean>;

  /** Whether the menus are collapsed into the burger menu. */
  _menusCollapsed: boolean = false;

  /** Event emitted when the header menu open state is changed. */
  @Output() readonly openedChange: EventEmitter<boolean> =
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter<boolean>(/* isAsync */ true);

  /** Event emitted when the header menu has been opened. */
  @Output('opened')
  get _openedStream(): Observable<void> {
    return this.openedChange.pipe(
      filter((o) => o),
      map(() => {})
    );
  }

  /** Event emitted when the header menu has started opening. */
  @Output()
  get openedStart(): Observable<void> {
    return this._animationStarted.pipe(
      filter((e) => e.fromState !== e.toState && e.toState.indexOf('open') === 0),
      map(() => {})
    );
  }

  /** Event emitted when the header menu has been closed. */
  @Output('closed')
  get _closedStream(): Observable<void> {
    return this.openedChange.pipe(
      filter((o) => !o),
      map(() => {})
    );
  }

  /** Event emitted when the header menu has started closing. */
  @Output()
  get closedStart(): Observable<void> {
    return this._animationStarted.pipe(
      filter((e) => e.fromState !== e.toState && e.toState === 'void'),
      map(() => {})
    );
  }

  /** @docs-private */
  @ViewChild('menu', { static: true }) _menuElement: ElementRef<HTMLElement>;
  /** @docs-private */
  @ViewChild(CdkPortal) _navigationPortal: CdkPortal;
  /** @docs-private */
  @ViewChild('mainMenuOutlet', { static: true }) _mainMenuOutlet: CdkPortalOutlet;
  /** @docs-private */
  @ViewChild('sideMenuOutlet', { static: true }) _sideMenuOutlet: CdkPortalOutlet;
  /** @docs-private */
  @ContentChildren(SbbAppChooserSection) _appChooserSections: QueryList<SbbAppChooserSection>;

  /** How the sidenav was opened (keypress, mouse click etc.) */
  private _openedVia: FocusOrigin | null;

  /** Emits when the component is destroyed. */
  private readonly _destroyed = new Subject<void>();

  private readonly _collapseBreakpoint = new BehaviorSubject<SbbHeaderCollapseBreakpoint>(
    this.collapseBreakpoint
  );

  private _focusTrap: FocusTrap;
  private _elementFocusedBeforeMenuWasOpened: HTMLElement | null = null;

  constructor(
    private _focusTrapFactory: FocusTrapFactory,
    private _focusMonitor: FocusMonitor,
    private _ngZone: NgZone,
    private _breakpointObserver: BreakpointObserver,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() private _router: Router,
    @Optional() @Inject(DOCUMENT) private _doc: any
  ) {
    this.openedChange.subscribe((opened: boolean) => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeMenuWasOpened = this._doc.activeElement as HTMLElement;
        }

        if (this.opened && this._focusTrap) {
          this._trapFocus();
        }
        if (this._doc && this.opened) {
          /**
           * Listen to `keydown` events outside the zone so that change detection is not run every
           * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
           */
          this._ngZone.runOutsideAngular(() => {
            merge(
              fromEvent<KeyboardEvent>(this._menuElement.nativeElement, 'keydown').pipe(
                filter((event) => event.keyCode === ESCAPE && !hasModifierKey(event))
              ),
              this._router
                ? this._router.events.pipe(filter((e) => e instanceof NavigationStart))
                : NEVER
            )
              .pipe(takeUntil(this.openedChange))
              .subscribe(() => this._ngZone.run(() => this.closeMenu()));
          });
        }
      } else {
        this._restoreFocus();
      }
    });

    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._animationEnd
      .pipe(
        distinctUntilChanged((x, y) => {
          return x.fromState === y.fromState && x.toState === y.toState;
        })
      )
      .subscribe((event: AnimationEvent) => {
        const { fromState, toState } = event;

        if (
          (toState.indexOf('open') === 0 && fromState === 'void') ||
          (toState === 'void' && fromState.indexOf('open') === 0)
        ) {
          this.openedChange.emit(this._opened);
        }
      });

    // Programmatically track the collapsed state of the header menus.
    // This is required in order to attach/detach the menus to the main
    // or side navigation.
    this._headerMenusCollapsed = this._collapseBreakpoint.pipe(
      distinctUntilChanged(),
      switchMap((breakpoint) => this._breakpointObserver.observe(breakpointMapping[breakpoint])),
      map((r) => r.matches),
      distinctUntilChanged(),
      shareReplay(),
      takeUntil(this._destroyed)
    );
  }

  ngOnInit() {
    this._checkLabel();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this._collapseBreakpoint.next(this.collapseBreakpoint);
  }

  ngAfterViewInit() {
    this._focusTrap = this._focusTrapFactory.create(this._menuElement.nativeElement);
    this._updateFocusTrapState();
    this._headerMenusCollapsed.subscribe((isCollapsed) => {
      Promise.resolve().then(() => {
        this._menusCollapsed = isCollapsed;
      });
      if (isCollapsed) {
        this._mainMenuOutlet.detach();
        this._sideMenuOutlet.attachTemplatePortal(this._navigationPortal);
      } else {
        this._sideMenuOutlet.detach();
        this._mainMenuOutlet.attachTemplatePortal(this._navigationPortal);
      }
    });
  }

  ngOnDestroy() {
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }

    this._animationStarted.complete();
    this._animationEnd.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }

  /** @docs-private */
  _openOnKeydownTrigger(event: KeyboardEvent) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      this.openMenu('keyboard');
    }
  }

  /**
   * Open the header menu.
   * @param openedVia Whether the header menu was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  openMenu(openedVia?: FocusOrigin): Promise<SbbHeaderMenuToggleResult> {
    return this.toggleMenu(true, openedVia);
  }

  /** @docs-private */
  _closeOnKeydownTrigger(event: KeyboardEvent) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      this.closeMenu();
    }
  }

  /** @docs-private */
  _onBackdropClicked() {
    this.closeMenu();
  }

  /** Close the header menu. */
  closeMenu(): Promise<SbbHeaderMenuToggleResult> {
    return this.toggleMenu(false);
  }

  /**
   * Toggle the header menu.
   * @param isOpen Whether the header menu should be open.
   * @param openedVia Whether the header menu was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggleMenu(
    isOpen: boolean = !this.opened,
    openedVia: FocusOrigin = 'program'
  ): Promise<SbbHeaderMenuToggleResult> {
    this._opened = isOpen;

    if (isOpen) {
      this._animationState = 'open';
      this._openedVia = openedVia;
    } else {
      this._animationState = 'void';
      this._changeDetectorRef.markForCheck();
      this._restoreFocus();
    }

    this._updateFocusTrapState();

    return new Promise<SbbHeaderMenuToggleResult>((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? 'open' : 'close'));
    });
  }

  /** @docs-private */
  _animationStartListener(event: AnimationEvent) {
    this._animationStarted.next(event);
  }

  /** @docs-private */
  _animationDoneListener(event: AnimationEvent) {
    this._animationEnd.next(event);
  }

  /** Validates required inputs. */
  private _checkLabel() {
    if (!this.label) {
      throw new Error('You must set [label] for sbb-header.');
    }
  }

  /** Traps focus inside the header menu. */
  private _trapFocus() {
    this._focusTrap.focusInitialElementWhenReady().then((hasMovedFocus) => {
      // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
      // still works. We need to check that `focus` is a function due to Universal.
      if (!hasMovedFocus && typeof this._menuElement.nativeElement.focus === 'function') {
        this._menuElement.nativeElement.focus();
      }
    });
  }

  /**
   * If focus is currently inside the header menu, restores it to where it was before
   * the header menu opened.
   */
  private _restoreFocus() {
    const activeEl = this._doc && this._doc.activeElement;

    if (activeEl && this._menuElement.nativeElement.contains(activeEl)) {
      if (this._elementFocusedBeforeMenuWasOpened instanceof HTMLElement) {
        this._focusMonitor.focusVia(this._elementFocusedBeforeMenuWasOpened, this._openedVia);
      } else {
        this._menuElement.nativeElement.blur();
      }
    }

    this._elementFocusedBeforeMenuWasOpened = null;
    this._openedVia = null;
  }

  /** Updates the enabled state of the focus trap. */
  private _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = this.opened;
    }
  }

  // tslint:disable: member-ordering
  static ngAcceptInputType_opened: BooleanInput;
  // tslint:enable: member-ordering
}

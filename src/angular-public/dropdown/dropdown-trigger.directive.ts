import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  DOWN_ARROW,
  END,
  ENTER,
  ESCAPE,
  HOME,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  PositionStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { _getShadowRoot } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TypeRef } from '@sbb-esta/angular-core/common-behaviors';
import {
  defer,
  fromEvent,
  merge,
  Observable,
  of as observableOf,
  Subject,
  Subscription,
} from 'rxjs';
import { delay, filter, map, switchMap, take, tap } from 'rxjs/operators';

import {
  getDropdownItemScrollPosition,
  SbbDropdownItem,
  SbbDropdownSelectionChange,
} from './dropdown-item.directive';
import { SbbDropdownOrigin } from './dropdown-origin.directive';
import { SbbDropdown } from './dropdown/dropdown.component';

/**
 * Creates an error to be thrown when attempting to use an dropdown trigger without a panel.
 * @docs-private
 */
export function getSbbDropdownMissingPanelError(): Error {
  return Error(
    'Attempting to open an undefined instance of `sbb-dropdown`. ' +
      'Make sure that the id passed to the `sbbDropdown` is correct and that ' +
      `you're attempting to open it after the ngAfterContentInit hook.`
  );
}

/** Injection token that determines the scroll handling while the dropdown panel is open. */
export const SBB_DROPDOWN_SCROLL_STRATEGY = new InjectionToken<() => ScrollStrategy>(
  'sbb-dropdown-scroll-strategy'
);

/** @docs-private */
export function SBB_DROPDOWN_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** The height of each dropdown option. */
export const SBB_DROPDOWN_OPTION_HEIGHT = 40;

/** The total height of the dropdown panel. */
export const SBB_DROPDOWN_PANEL_HEIGHT = 404;

export const SBB_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: SBB_DROPDOWN_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: SBB_DROPDOWN_SCROLL_STRATEGY_FACTORY,
};

const panelPositionNames: { [key: string]: ConnectedPosition } = {
  BOTTOM_LEFT: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
  },
  TOP_LEFT: {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
  },
  BOTTOM_RIGHT: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  TOP_RIGHT: {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
};

const panelPositionMappings: { [key: string]: ConnectedPosition[] } = {
  left: [panelPositionNames.BOTTOM_LEFT, panelPositionNames.TOP_LEFT],
  right: [panelPositionNames.BOTTOM_RIGHT, panelPositionNames.TOP_RIGHT],
  'prefer-left': [
    panelPositionNames.BOTTOM_LEFT,
    panelPositionNames.TOP_LEFT,
    panelPositionNames.BOTTOM_RIGHT,
    panelPositionNames.TOP_RIGHT,
  ],
  'prefer-right': [
    panelPositionNames.BOTTOM_RIGHT,
    panelPositionNames.TOP_RIGHT,
    panelPositionNames.BOTTOM_LEFT,
    panelPositionNames.TOP_LEFT,
  ],
};

@Directive({
  selector: `[sbbDropdown]`,
  exportAs: 'sbbDropdownTrigger',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SbbDropdownTrigger),
      multi: true,
    },
  ],
  host: {
    class: 'sbb-dropdown-trigger',
    '[attr.role]': 'this.dropdownDisabled ? null : "combobox"',
    '[attr.aria-activedescendant]': 'this.activeOption ? this.activeOption.id : null',
    '[attr.aria-expanded]': 'this.dropdownDisabled ? null : this.panelOpen.toString()',
    '[attr.aria-owns]': 'this.dropdownDisabled || !this.panelOpen ? null : this.dropdown.id',
  },
})
export class SbbDropdownTrigger implements OnDestroy {
  /**
   * Whether the dropdown is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  @Input('sbbDropdownDisabled')
  get dropdownDisabled(): boolean {
    return this._dropdownDisabled;
  }
  set dropdownDisabled(value: boolean) {
    this._dropdownDisabled = coerceBooleanProperty(value);
  }
  private _dropdownDisabled = false;

  /** Whether or not the dropdown panel is open. */
  get panelOpen(): boolean {
    return this._overlayAttached && this.dropdown.showPanel;
  }

  /**
   * A stream of actions that should close the dropdown panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions(): Observable<SbbDropdownSelectionChange | null> {
    return merge(
      this.optionSelections,
      this.dropdown.keyManager.tabOut.pipe(filter(() => this._overlayAttached)),
      this._closeKeyEventStream,
      this._getOutsideClickStream(),
      this._overlayRef
        ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached))
        : observableOf()
    ).pipe(
      // Normalize the output so we return a consistent type.
      map((event) => (event instanceof SbbDropdownSelectionChange ? event : null))
    );
  }

  /** The currently active option, coerced to SbbOption type. */
  get activeOption(): SbbDropdownItem | null {
    return this.dropdown && this.dropdown.keyManager ? this.dropdown.keyManager.activeItem : null;
  }

  /** The dropdown panel to be attached to this trigger. */
  // tslint:disable-next-line:no-input-rename
  @Input('sbbDropdown') dropdown: SbbDropdown;

  /**
   * Reference relative to which to position the dropdown panel.
   * Defaults to the dropdown trigger element.
   */
  // tslint:disable-next-line:no-input-rename
  @Input('sbbDropdownConnectedTo') connectedTo: SbbDropdownOrigin;

  @Input() panelClass: string = '';

  /** Whether the dropdown should be opened on the left or the right side of the origin. */
  horizontalOrientation: 'left' | 'right' | 'prefer-right' | 'prefer-left' = 'right';

  /** Stream of dropdown option selections. */
  readonly optionSelections: Observable<SbbDropdownSelectionChange> = defer(() => {
    if (this.dropdown && this.dropdown.options) {
      return merge(...this.dropdown.options.map((option) => option.selectionChange));
    }

    // If there are any subscribers before `ngAfterViewInit`, the `dropdown` will be undefined.
    // Return a stream that we'll replace with the real one once everything is in place.
    return this._zone.onStable.asObservable().pipe(
      take(1),
      switchMap(() => this.optionSelections)
    );
  }) as Observable<SbbDropdownSelectionChange>;

  private _overlayRef: OverlayRef | null;
  private _portal: TemplatePortal;
  private _componentDestroyed = false;

  /** Strategy that is used to position the panel. */
  protected _positionStrategy: FlexibleConnectedPositionStrategy;

  /** The subscription for closing actions (some are bound to document). */
  private _closingActionsSubscription: Subscription;

  /** Subscription to viewport size changes. */
  private _viewportSubscription = Subscription.EMPTY;
  private _positionSubscription = Subscription.EMPTY;

  /** Stream of keyboard events that can close the panel. */
  private readonly _closeKeyEventStream = new Subject<void>();
  private _overlayAttached = false;

  /** Whether the element is inside of a ShadowRoot component. */
  private _isInsideShadowRoot: boolean;

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement>,
    protected _overlay: Overlay,
    protected _viewContainerRef: ViewContainerRef,
    protected _zone: NgZone,
    protected _changeDetectorRef: ChangeDetectorRef,
    @Inject(SBB_DROPDOWN_SCROLL_STRATEGY) protected _scrollStrategy: any,
    @Optional() @Inject(DOCUMENT) protected _document: any,
    protected _viewportRuler?: ViewportRuler
  ) {}

  ngOnDestroy() {
    this._viewportSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }

  @HostListener('blur')
  _onBlur() {
    if (!!this.connectedTo) {
      this.closePanel();
    }
  }

  /** Handles all keydown events on the select. */
  @HostListener('keydown', ['$event'])
  _handleKeydown(event: TypeRef<KeyboardEvent>): void {
    if (!this.dropdownDisabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }

  /** Handles keyboard events while the select is closed. */
  private _handleClosedKeydown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    const isArrowKey =
      keyCode === DOWN_ARROW ||
      keyCode === UP_ARROW ||
      keyCode === LEFT_ARROW ||
      keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;

    // Open the select on ALT + arrow key to match the native <select>
    if (isOpenKey || (event.altKey && isArrowKey)) {
      event.preventDefault(); // prevents the page from scrolling down when pressing space
      this.openPanel();
    } else {
      this.dropdown.keyManager.onKeydown(event);
    }
  }

  /** Handles keyboard events when the selected is open. */
  private _handleOpenKeydown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const manager = this.dropdown.keyManager;

    if (keyCode === HOME || keyCode === END) {
      event.preventDefault();
      keyCode === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
    } else if (isArrowKey && event.altKey) {
      // Close the select on ALT + arrow key to match the native <select>
      event.preventDefault();
      this.closePanel();
    } else if ((keyCode === ENTER || keyCode === SPACE) && manager.activeItem) {
      event.preventDefault();
      manager.activeItem.selectViaInteraction();
    } else {
      manager.onKeydown(event);
    }
  }

  /** Opens the dropdown suggestion panel. */
  openPanel(): void {
    this._attachOverlay();
  }

  /** Closes the dropdown suggestion panel. */
  closePanel(): void {
    if (!this._overlayAttached) {
      return;
    }

    if (this.panelOpen) {
      // Only emit if the panel was visible.
      this.dropdown.closed.emit();
    }

    this.dropdown.open = this._overlayAttached = false;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }

    // Note that in some cases this can end up being called after the component is destroyed.
    // Add a check to ensure that we don't try to run change detection on a destroyed view.
    if (!this._componentDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      // This ensures that the label is reset when the
      // user clicks outside.
      this._changeDetectorRef.detectChanges();
    }
  }

  /** Stream of clicks outside of the dropdown panel. */
  private _getOutsideClickStream(): Observable<any> {
    if (!this._document) {
      return observableOf(null);
    }

    return merge(
      fromEvent<MouseEvent>(this._document, 'click'),
      fromEvent<TouchEvent>(this._document, 'touchend')
    ).pipe(
      filter((event) => {
        // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
        // fall back to check the first element in the path of the click event.
        const clickTarget = (
          this._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target
        ) as HTMLElement;

        return (
          this._overlayAttached &&
          clickTarget !== this._elementRef.nativeElement &&
          !this._elementRef.nativeElement.contains(clickTarget) &&
          !!this._overlayRef &&
          !this._overlayRef.overlayElement.contains(clickTarget)
        );
      })
    );
  }

  scrollToOption(): void {
    const index = this.dropdown.keyManager.activeItemIndex || 0;
    const labelCount = 0;

    const newScrollPosition = getDropdownItemScrollPosition(
      index + labelCount,
      SBB_DROPDOWN_OPTION_HEIGHT,
      this.dropdown.getScrollTop(),
      SBB_DROPDOWN_PANEL_HEIGHT
    );

    this.dropdown.setScrollTop(newScrollPosition);
  }

  @HostListener('click', ['$event'])
  _handleClick(event: any): void {
    if (event instanceof MouseEvent) {
      if (!this.panelOpen) {
        if (this._canOpen()) {
          this.openPanel();
        }
      } else {
        this.closePanel();
      }
    }
  }

  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  private _subscribeToClosingActions(): Subscription {
    const firstStable = this._zone.onStable.asObservable().pipe(take(1));
    const optionChanges = this.dropdown.options.changes.pipe(
      tap(() => this._positionStrategy.reapplyLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    );

    // When the zone is stable initially, and when the option list changes...
    return (
      merge(firstStable, optionChanges)
        .pipe(
          // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          switchMap(() => {
            this._resetActiveItem();
            this.dropdown.setVisibility();

            if (this.panelOpen) {
              // tslint:disable-next-line:no-non-null-assertion
              this._overlayRef!.updatePosition();
            }

            return this.panelClosingActions;
          }),
          // when the first closing event occurs...
          take(1)
        )
        // set the value, close the panel, and complete.
        .subscribe((event) => this._setValueAndClose(event))
    );
  }

  /** Destroys the dropdown suggestion panel. */
  private _destroyPanel(): void {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }

  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  private _setValueAndClose(event: SbbDropdownSelectionChange | null): void {
    if (event && event.source) {
      this._clearPreviousSelectedOption(event.source);
      this._elementRef.nativeElement.focus();
      this.dropdown.emitSelectEvent(event.source);
    }

    this.closePanel();
  }

  /** Clear any previous selected option and emit a selection change event for this option */
  private _clearPreviousSelectedOption(skip: SbbDropdownItem) {
    this.dropdown.options.forEach((item) => {
      // tslint:disable-next-line:triple-equals
      if (item != skip && item.selected) {
        item.deselect();
      }
    });
  }

  protected _attachOverlay(): void {
    if (!this.dropdown) {
      throw getSbbDropdownMissingPanelError();
    }

    // We want to resolve this once, as late as possible so that we can be
    // sure that the element has been moved into its final place in the DOM.
    if (this._isInsideShadowRoot == null) {
      this._isInsideShadowRoot = !!_getShadowRoot(this._elementRef.nativeElement);
    }

    if (!this._overlayRef) {
      this._portal = new TemplatePortal(this.dropdown.template, this._viewContainerRef);
      this._overlayRef = this._overlay.create(this._getOverlayConfig());

      if (this._positionStrategy) {
        this._positionSubscription = this._positionStrategy.positionChanges.subscribe(
          (position) => {
            if (this.dropdown.panel) {
              if (position.connectionPair.originY === 'top') {
                this.dropdown.panel.nativeElement.classList.add('sbb-dropdown-panel-above');
                this._getConnectedElement().nativeElement.classList.add(
                  'sbb-dropdown-trigger-above'
                );
              } else {
                this.dropdown.panel.nativeElement.classList.remove('sbb-dropdown-panel-above');
                this._getConnectedElement().nativeElement.classList.remove(
                  'sbb-dropdown-trigger-above'
                );
              }

              if (position.connectionPair.originX === 'end') {
                this.dropdown.panel.nativeElement.classList.add('sbb-dropdown-panel-left');
                this._getConnectedElement().nativeElement.classList.add(
                  'sbb-dropdown-trigger-left'
                );
              } else {
                this.dropdown.panel.nativeElement.classList.remove('sbb-dropdown-panel-left');
                this._getConnectedElement().nativeElement.classList.remove(
                  'sbb-dropdown-trigger-left'
                );
              }
            }
          }
        );
      }

      // Use the `keydownEvents` in order to take advantage of
      // the overlay event targeting provided by the CDK overlay.
      this._overlayRef.keydownEvents().subscribe((event) => {
        // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
        if (event.keyCode === ESCAPE || (event.keyCode === UP_ARROW && event.altKey)) {
          this._resetActiveItem();
          this._closeKeyEventStream.next();
        }
      });

      if (this._viewportRuler) {
        this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
          if (this.panelOpen && this._overlayRef) {
            this._overlayRef.updateSize({ width: this._getPanelWidth() });
          }
        });
      }
    } else {
      // Update the panel width and direction, in case anything has changed.
      this._overlayRef.updateSize({ width: this._getPanelWidth() });
    }

    if (this._overlayRef && !this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._portal);
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }

    const wasOpen = this.panelOpen;

    this.dropdown.setVisibility();
    this.dropdown.open = this._overlayAttached = true;

    // We need to do an extra `panelOpen` check in here, because the
    // dropdown won't be shown if there are no options.
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this.dropdown.opened.emit();
    }
  }

  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      panelClass: [this.panelClass, 'sbb-overlay-panel'],
      minHeight: 30,
    });
  }

  protected _getOverlayPosition(): PositionStrategy {
    this._positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._getConnectedElement())
      .withFlexibleDimensions(true)
      .withPush(false)
      .withPositions(panelPositionMappings[this.horizontalOrientation]);

    return this._positionStrategy;
  }

  protected _getConnectedElement(): ElementRef {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }

    return this._elementRef;
  }

  protected _getPanelWidth(): number | string {
    return this.dropdown.panelWidth || this._getHostWidth();
  }

  /** Returns the width of the input element, so the panel width can match it. */
  protected _getHostWidth(): number {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }

  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */
  private _resetActiveItem(): void {
    this.dropdown.keyManager.setActiveItem(this.dropdown.autoActiveFirstOption ? 0 : -1);
  }

  /** Determines whether the panel can be opened. */
  private _canOpen(): boolean {
    const element = this._elementRef.nativeElement;
    return !element.readOnly && !element.disabled && !this.dropdownDisabled;
  }

  // tslint:disable: member-ordering
  static ngAcceptInputType_dropdownDisabled: BooleanInput;
  // tslint:enable: member-ordering
}

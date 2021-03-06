import { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { NumberInput } from '@angular/cdk/coercion';
import { ENTER, hasModifierKey, SPACE } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  Inject,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { HasTabIndex, mixinTabIndex, TypeRef } from '@sbb-esta/angular-core/common-behaviors';
import { EMPTY, merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { sbbExpansionAnimations } from '../accordion/accordion-animations';
import { SbbExpansionPanel } from '../expansion-panel/expansion-panel.component';

// Boilerplate for applying mixins to SbbExpansionPanelHeader.
/** @docs-private */
abstract class SbbExpansionPanelHeaderBase {
  abstract readonly disabled: boolean;
}
// tslint:disable-next-line: naming-convention
const _SbbExpansionPanelHeaderMixinBase = mixinTabIndex(SbbExpansionPanelHeaderBase);

/**
 * `<sbb-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<sbb-expansion-panel>`.
 */
@Component({
  selector: 'sbb-expansion-panel-header',
  styleUrls: ['./expansion-panel-header.component.css'],
  templateUrl: './expansion-panel-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['tabIndex'],
  animations: [sbbExpansionAnimations.indicatorRotate],
  host: {
    class: 'sbb-expansion-panel-header',
    role: 'button',
    '[attr.id]': 'panel._headerId',
    '[attr.tabindex]': 'tabIndex',
    '[attr.aria-controls]': '_getPanelId()',
    '[attr.aria-expanded]': '_isExpanded()',
    '[attr.aria-disabled]': 'panel.disabled',
    '[class.sbb-expansion-panel-header-hide-toggle]': '!_showToggle()',
    '[class.sbb-expanded]': '_isExpanded()',
    '[class.sbb-expansion-panel-header-disabled]': 'panel.disabled',
    '(click)': '_toggle()',
    '(keydown)': '_keydown($event)',
  },
})
export class SbbExpansionPanelHeader
  extends _SbbExpansionPanelHeaderMixinBase
  implements OnDestroy, FocusableOption, HasTabIndex
{
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }

  private _parentChangeSubscription = Subscription.EMPTY;

  constructor(
    /** Class property that refers to the ExpansionPanelComponent. */
    @Host() public panel: SbbExpansionPanel,
    private _element: ElementRef,
    private _focusMonitor: FocusMonitor,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document?: TypeRef<Document>,
    @Attribute('tabindex') tabIndex?: string
  ) {
    super();
    const accordionHideToggleChange = panel.accordion
      ? panel.accordion._stateChanges.pipe(filter((changes) => !!changes.hideToggle))
      : EMPTY;
    this.tabIndex = parseInt(tabIndex || '', 10) || 0;

    // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = merge(
      panel.opened,
      panel.closed,
      accordionHideToggleChange,
      panel._inputChanges.pipe(filter((changes) => !!(changes.hideToggle || changes.disabled)))
    ).subscribe(() => this._changeDetectorRef.markForCheck());

    // Avoids focus being lost if the panel contained the focused element and was closed.
    panel.closed
      .pipe(filter(() => panel._containsFocus()))
      .subscribe(() => _focusMonitor.focusVia(_element.nativeElement, 'program'));

    _focusMonitor.monitor(_element.nativeElement).subscribe((origin) => {
      if (origin && panel.accordion) {
        panel.accordion.handleHeaderFocus(this);
      }
    });

    this._document = document;
  }

  /** Toggles the expanded state of the panel. */
  _toggle(): void {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }

  /** Gets whether the panel is expanded. */
  _isExpanded(): boolean {
    return this.panel.expanded;
  }

  /** Gets the expanded state string of the panel. */
  _getExpandedState(): string {
    return this.panel._getExpandedState();
  }

  /** Gets the panel id. */
  _getPanelId(): string {
    return this.panel.id;
  }

  /** Gets whether the expand indicator should be shown. */
  _showToggle(): boolean {
    return !this.panel.hideToggle && !this.panel.disabled;
  }

  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event: TypeRef<KeyboardEvent>) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event) && this._isFocused()) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion.handleHeaderKeydown(event);
        }

        return;
    }
  }

  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin: FocusOrigin = 'program', options?: FocusOptions) {
    this._focusMonitor.focusVia(this._element.nativeElement, origin, options);
  }

  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element.nativeElement);
  }

  private _isFocused() {
    return this._document?.activeElement === this._element.nativeElement;
  }

  static ngAcceptInputType_tabIndex: NumberInput;
}

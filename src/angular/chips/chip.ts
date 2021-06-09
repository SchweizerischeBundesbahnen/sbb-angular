import { FocusableOption } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty, NumberInput } from '@angular/cdk/coercion';
import { BACKSPACE, DELETE, SPACE } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  Attribute,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
} from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { CanDisable, HasTabIndex, mixinTabIndex } from '@sbb-esta/angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

/** Represents an event fired on an individual `sbb-chip`. */
export interface SbbChipEvent {
  /** The chip the event was fired on. */
  chip: SbbChip;
}

/** Event object emitted by SbbChip when selected or deselected. */
export class SbbChipSelectionChange {
  constructor(
    /** Reference to the chip that emitted the event. */
    public source: SbbChip,
    /** Whether the chip that emitted the event is selected. */
    public selected: boolean,
    /** Whether the selection change was a result of a user interaction. */
    public isUserInput = false
  ) {}
}

/**
 * Injection token that can be used to reference instances of `SbbChipRemove`. It serves as
 * alternative token to the actual `SbbChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const SBB_CHIP_REMOVE = new InjectionToken<SbbChipRemove>('SbbChipRemove');

/**
 * Injection token that can be used to reference instances of `SbbChipAvatar`. It serves as
 * alternative token to the actual `SbbChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const SBB_CHIP_AVATAR = new InjectionToken<SbbChipAvatar>('SbbChipAvatar');

/**
 * Injection token that can be used to reference instances of `SbbChipTrailingIcon`. It serves as
 * alternative token to the actual `SbbChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const SBB_CHIP_TRAILING_ICON = new InjectionToken<SbbChipTrailingIcon>(
  'SbbChipTrailingIcon'
);

// Boilerplate for applying mixins to SbbChip.
/** @docs-private */
abstract class SbbChipBase {
  abstract disabled: boolean;
  constructor(public _elementRef: ElementRef) {}
}

// tslint:disable-next-line:naming-convention
const _SbbChipMixinBase = mixinTabIndex(SbbChipBase, -1);

/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */
@Directive({
  selector: 'sbb-chip-avatar, [sbbChipAvatar]',
  host: { class: 'sbb-chip-avatar' },
  providers: [{ provide: SBB_CHIP_AVATAR, useExisting: SbbChipAvatar }],
})
export class SbbChipAvatar {}

/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */
@Directive({
  selector: 'sbb-chip-trailing-icon, [sbbChipTrailingIcon]',
  host: { class: 'sbb-chip-trailing-icon' },
  providers: [{ provide: SBB_CHIP_TRAILING_ICON, useExisting: SbbChipTrailingIcon }],
})
export class SbbChipTrailingIcon {}

/**
 * Sbberial design styled Chip component. Used inside the SbbChipList component.
 */
@Directive({
  selector: `sbb-basic-chip, [sbb-basic-chip], sbb-chip, [sbb-chip]`,
  inputs: ['tabIndex'],
  exportAs: 'sbbChip',
  host: {
    class: 'sbb-chip sbb-focus-indicator',
    '[attr.tabindex]': 'disabled ? null : tabIndex',
    role: 'option',
    '[class.sbb-chip-selected]': 'selected',
    '[class.sbb-chip-with-avatar]': 'avatar',
    '[class.sbb-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
    '[class.sbb-chip-disabled]': 'disabled',
    '[class._sbb-animation-noopable]': '_animationsDisabled',
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled.toString()',
    '[attr.aria-selected]': 'ariaSelected',
    '(click)': '_handleClick($event)',
    '(keydown)': '_handleKeydown($event)',
    '(focus)': 'focus()',
    '(blur)': '_blur()',
  },
})
export class SbbChip
  extends _SbbChipMixinBase
  implements FocusableOption, OnDestroy, HasTabIndex, CanDisable
{
  /** Whether the chip has focus. */
  _hasFocus: boolean = false;

  /** Whether animations for the chip are enabled. */
  _animationsDisabled: boolean;

  /** Whether the chip list is selectable */
  chipListSelectable: boolean = true;

  /** Whether the chip list is in multi-selection mode. */
  _chipListMultiple: boolean = false;

  /** Whether the chip list as a whole is disabled. */
  _chipListDisabled: boolean = false;

  /** The chip avatar */
  @ContentChild(SBB_CHIP_AVATAR) avatar: SbbChipAvatar;

  /** The chip's trailing icon. */
  @ContentChild(SBB_CHIP_TRAILING_ICON) trailingIcon: SbbChipTrailingIcon;

  /** The chip's remove toggler. */
  @ContentChild(SBB_CHIP_REMOVE) removeIcon: SbbChipRemove;

  /** Whether the chip is selected. */
  @Input()
  get selected(): boolean {
    return this._selected;
  }
  set selected(value: boolean) {
    const coercedValue = coerceBooleanProperty(value);

    if (coercedValue !== this._selected) {
      this._selected = coercedValue;
      this._dispatchSelectionChange();
    }
  }
  protected _selected: boolean = false;

  /** The value of the chip. Defaults to the content inside `<sbb-chip>` tags. */
  @Input()
  get value(): any {
    return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
  }
  set value(value: any) {
    this._value = value;
  }
  protected _value: any;

  /**
   * Whether or not the chip is selectable. When a chip is not selectable,
   * changes to its selected state are always ignored. By default a chip is
   * selectable, and it becomes non-selectable if its parent chip list is
   * not selectable.
   */
  @Input()
  get selectable(): boolean {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value: boolean) {
    this._selectable = coerceBooleanProperty(value);
  }
  protected _selectable: boolean = true;

  /** Whether the chip is disabled. */
  @Input()
  get disabled(): boolean {
    return this._chipListDisabled || this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  protected _disabled: boolean = false;

  /**
   * Determines whether or not the chip displays the remove styling and emits (removed) events.
   */
  @Input()
  get removable(): boolean {
    return this._removable;
  }
  set removable(value: boolean) {
    this._removable = coerceBooleanProperty(value);
  }
  protected _removable: boolean = true;

  /** Emits when the chip is focused. */
  readonly _onFocus = new Subject<SbbChipEvent>();

  /** Emits when the chip is blurred. */
  readonly _onBlur = new Subject<SbbChipEvent>();

  /** Emitted when the chip is selected or deselected. */
  @Output() readonly selectionChange: EventEmitter<SbbChipSelectionChange> =
    new EventEmitter<SbbChipSelectionChange>();

  /** Emitted when the chip is destroyed. */
  @Output() readonly destroyed: EventEmitter<SbbChipEvent> = new EventEmitter<SbbChipEvent>();

  /** Emitted when a chip is to be removed. */
  @Output() readonly removed: EventEmitter<SbbChipEvent> = new EventEmitter<SbbChipEvent>();

  /** The ARIA selected applied to the chip. */
  get ariaSelected(): string | null {
    // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
    // it adds noise to NVDA users where "not selected" will be read out for each chip.
    return this.selectable && (this._chipListMultiple || this.selected)
      ? this.selected.toString()
      : null;
  }

  constructor(
    public _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
    @Optional()
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
    @Attribute('tabindex') tabIndex?: string
  ) {
    super(_elementRef);

    this._addHostClassName();

    this._animationsDisabled = animationMode === 'NoopAnimations';
    this.tabIndex = tabIndex != null ? parseInt(tabIndex, 10) || -1 : -1;
  }

  _addHostClassName() {
    const basicChipAttrName = 'sbb-basic-chip';
    const element = this._elementRef.nativeElement as HTMLElement;

    if (
      element.hasAttribute(basicChipAttrName) ||
      element.tagName.toLowerCase() === basicChipAttrName
    ) {
      element.classList.add(basicChipAttrName);
      return;
    } else {
      element.classList.add('sbb-standard-chip');
    }
  }

  ngOnDestroy() {
    this.destroyed.emit({ chip: this });
  }

  /** Selects the chip. */
  select(): void {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Deselects the chip. */
  deselect(): void {
    if (this._selected) {
      this._selected = false;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Select this chip and emit selected event */
  selectViaInteraction(): void {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange(true);
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Toggles the current selected state of this chip. */
  toggleSelected(isUserInput: boolean = false): boolean {
    this._selected = !this.selected;
    this._dispatchSelectionChange(isUserInput);
    this._changeDetectorRef.markForCheck();
    return this.selected;
  }

  /** Allows for programmatic focusing of the chip. */
  focus(): void {
    if (!this._hasFocus) {
      this._elementRef.nativeElement.focus();
      this._onFocus.next({ chip: this });
    }
    this._hasFocus = true;
  }

  /**
   * Allows for programmatic removal of the chip. Called by the SbbChipList when the DELETE or
   * BACKSPACE keys are pressed.
   *
   * Informs any listeners of the removal request. Does not remove the chip from the DOM.
   */
  remove(): void {
    if (this.removable) {
      this.removed.emit({ chip: this });
    }
  }

  /** Handles click events on the chip. */
  _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
    } else {
      event.stopPropagation();
    }
  }

  /** Handle custom key presses. */
  _handleKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    switch (event.keyCode) {
      case DELETE:
      case BACKSPACE:
        // If we are removable, remove the focused chip
        this.remove();
        // Always prevent so page navigation does not occur
        event.preventDefault();
        break;
      case SPACE:
        // If we are selectable, toggle the focused chip
        if (this.selectable) {
          this.toggleSelected(true);
        }

        // Always prevent space from scrolling the page since the list has focus
        event.preventDefault();
        break;
    }
  }

  _blur(): void {
    // When animations are enabled, Angular may end up removing the chip from the DOM a little
    // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
    // that moves focus not the next item. To work around the issue, we defer marking the chip
    // as not focused until the next time the zone stabilizes.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this._ngZone.run(() => {
        this._hasFocus = false;
        this._onBlur.next({ chip: this });
      });
    });
  }

  private _dispatchSelectionChange(isUserInput = false) {
    this.selectionChange.emit({
      source: this,
      isUserInput,
      selected: this._selected,
    });
  }

  static ngAcceptInputType_selected: BooleanInput;
  static ngAcceptInputType_selectable: BooleanInput;
  static ngAcceptInputType_removable: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_tabIndex: NumberInput;
}

/**
 * Applies proper (click) support and adds styling for use with the Sbb Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel. TODO
 *
 * Example:
 *
 *     `<sbb-chip>
 *       <sbb-icon sbbChipRemove>cancel</sbb-icon>
 *     </sbb-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `sbb-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
@Directive({
  selector: '[sbbChipRemove]',
  host: {
    class: 'sbb-chip-remove sbb-chip-trailing-icon',
    '(click)': '_handleClick($event)',
  },
  providers: [{ provide: SBB_CHIP_REMOVE, useExisting: SbbChipRemove }],
})
export class SbbChipRemove {
  constructor(protected _parentChip: SbbChip, elementRef: ElementRef<HTMLElement>) {
    if (elementRef.nativeElement.nodeName === 'BUTTON') {
      elementRef.nativeElement.setAttribute('type', 'button');
    }
  }

  /** Calls the parent chip's public `remove()` method if applicable. */
  _handleClick(event: Event): void {
    const parentChip = this._parentChip;

    if (parentChip.removable && !parentChip.disabled) {
      parentChip.remove();
    }

    // We need to stop event propagation because otherwise the event will bubble up to the
    // form field and cause the `onContainerClick` method to be invoked. This method would then
    // reset the focused chip that has been focused after chip removal. Usually the parent
    // the parent click listener of the `SbbChip` would prevent propagation, but it can happen
    // that the chip is being removed before the event bubbles up.
    event.stopPropagation();
  }
}
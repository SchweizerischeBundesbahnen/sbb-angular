import { Directive, ElementRef, HostBinding, ChangeDetectorRef, HostListener, InjectionToken, Output, EventEmitter } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import { ENTER, SPACE } from '@angular/cdk/keycodes';

let counter = 0;

/** Event object emitted by AutocompleteOptionComponent when selected or deselected. */
export class DropdownSelectionChange {
  constructor(
    /** Reference to the option that emitted the event. */
    public source: DropdownItemDirective
  ) { }
}

/**
 * Describes a parent component that manages a list of options.
 * Contains properties that the options can inherit.
 * @docs-private
 */
export interface DropdownParentComponent {
  multiple?: boolean;
}

/**
 * Injection token used to provide the parent component to options.
 */
export const SBB_DROPDOWN_ITEM_PARENT_COMPONENT =
  new InjectionToken<DropdownParentComponent>('SBB_DROPDOWN_ITEM_PARENT_COMPONENT');

/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionIndex Index of the option to be scrolled into the view.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
export function getOptionScrollPosition(optionIndex: number, optionHeight: number,
  currentScrollPosition: number, panelHeight: number): number {
  const optionOffset = optionIndex * optionHeight;

  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}


@Directive({ selector: '[sbbDropdownItem]' })
export class DropdownItemDirective implements Highlightable {
  id = 'sbb-dropdown-item-' + counter++;

  disabled?= false;
  selected = false;

  @Output()
  readonly selectionChange = new EventEmitter<DropdownSelectionChange>();

  @HostBinding('class.sbb-active')
  active = false;

  setActiveStyles(): void {
    if (!this.active) {
      this.active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  setInactiveStyles(): void {
    if (this.active) {
      this.active = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  getLabel?(): string {
    return this.elementRef.nativeElement.textContent;
  }

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    // tslint:disable-next-line
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this.selectViaInteraction();

      // Prevent the page from scrolling down and form submits.
      event.preventDefault();
    }
  }

  @HostListener('click')
  onClick(): void {
    this.emitSelectionChangeEvent();
  }

  selectViaInteraction(): void {
    // this.elementRef.nativeElement.click();
    this.emitSelectionChangeEvent();
  }

  private emitSelectionChangeEvent(): void {
    this.selectionChange.emit(new DropdownSelectionChange(this));
    console.log('selectionChange');

  }

  select(): void {
    if (!this.selected) {
      this.selected = true;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent();
    }
  }

  deselect(): void {
    if (this.selected) {
      this.selected = false;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent();
    }
  }


}

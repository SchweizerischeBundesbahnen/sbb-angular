import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  AutocompleteComponent,
  AutocompleteOriginDirective
} from '@sbb-esta/angular-business/autocomplete';
import { FormFieldControl } from '@sbb-esta/angular-core/forms';
import { Subject } from 'rxjs';

let nextUniqueId = 0;

/** Change event object that is emitted when the chip-input value has changed. */
export class SbbChipInputChange {
  constructor(
    /** Reference to the chip-input that emitted the change event. */
    public source: ChipInputComponent,
    /** Current value of the chip-input that emitted the event. */
    public value: string[]
  ) {}
}

@Component({
  selector: 'sbb-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss']
})
export class ChipInputComponent implements FormFieldControl<any>, OnInit {
  /** Optional autocomplete Component */
  @Input('sbbAutocomplete')
  autocomplete: AutocompleteComponent;

  /** Disables the chip input */
  @Input()
  @HostBinding('class.sbb-chip-input-disabled')
  get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  /** Unique id of the element. */
  @Input()
  @HostBinding('attr.id')
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  private _id: string;

  /** Whether the component is required. */
  @HostBinding('class.sbb-chip-input-required')
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  /** @docs-private */
  @HostBinding('class.sbb-chip-input-active')
  get _isActive() {
    return !this.disabled && this.focused;
  }

  @ViewChild('chipInputTextfield', { static: false })
  inputElement: ElementRef;

  /** Value of the chip input control. */
  get value(): any {
    return this._value;
  }
  set value(newValue: any) {
    if (newValue !== this._value) {
      this._value = newValue;
    }
  }
  private _value: string[] = [];

  /**
   * Implemented as part of FormFieldControl.
   * @docs-private
   */
  get inputId() {
    return this.id;
  }

  /** Whether the chip-input has a value. */
  get empty(): boolean {
    return !this.selectionModel || this.selectionModel.isEmpty();
  }

  /**
   * Event that emits whenever the raw value of the chip-input changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  focused = false;
  errorState: boolean;
  inputModel = '';
  origin = new AutocompleteOriginDirective(this._elementRef);
  selectionModel: SelectionModel<string>;

  private _onTouchedCallback: () => void;
  private _onChangeCallback: (_: any) => void;

  /** Whether filling out the chip-input is required in the form. */
  private _required = false;

  /** The aria-describedby attribute on the chip-input for improved a11y. */
  private _ariaDescribedby: string;

  /** Unique id for this input. */
  private _uid = `sbb-chip-input-${nextUniqueId++}`;

  /** Emits when the state of the option changes and any parents have to be notified. */
  readonly stateChanges = new Subject<void>();

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }

    // Force setter to be called in case id was not specified.
    this.id = this.id;
  }

  ngOnInit(): void {
    this.selectionModel = new SelectionModel<string>(true);
    this._initializeSelection();
    if (this.autocomplete) {
      this.autocomplete.optionSelected.subscribe(event => this.onSelect(event.option.value));
    }
  }

  /**
   * Sets the chip input's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value: string[]): void {
    if (this.selectionModel) {
      value.forEach(v => this.onSelect(v));
    }
  }

  /**
   * Disables the chip input. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  /**
   * Adds a given value to the current selected values.
   */
  onSelect(option: string) {
    if (!this.selectionModel.isSelected(option)) {
      this.selectionModel.select(option);
      this._propagateChanges();
    }
    this.inputElement.nativeElement.value = '';
  }

  /**
   * Removes a given value from the current selected values.
   */
  deselectOption(option: string) {
    if (this.selectionModel.isSelected(option)) {
      this.selectionModel.deselect(option);
      this._propagateChanges(option);
    }
  }

  /** `View -> model callback called when value changes` */
  onChange: (value: any) => void = () => {};

  /**
   * Saves a callback function to be invoked when the chip input's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  /**
   * Saves a callback function to be invoked when the chip input is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  /**
   * Implemented as part of FormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids: string[]): void {
    this._ariaDescribedby = ids.join(' ');
  }

  /** Emits change event to set the model value. */
  private _propagateChanges(fallbackValue?: string): void {
    this._value = this.selectionModel.selected;
    this.onChange(this._value);
    this.valueChange.emit(new SbbChipInputChange(this, this._value));
    this._value ? this.valueChange.emit(this._value) : this.valueChange.emit(fallbackValue);
    this._value ? this._onChangeCallback(this._value) : this._onChangeCallback(fallbackValue);
    this._onTouchedCallback();
    this._changeDetectorRef.markForCheck();
  }

  private _initializeSelection(): void {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      this.ngControl ? this.writeValue(this.ngControl.value) : this.writeValue(this._value);
    });
  }
}

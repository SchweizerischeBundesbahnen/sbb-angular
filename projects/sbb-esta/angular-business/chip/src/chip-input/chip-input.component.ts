import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { AutocompleteComponent } from '@sbb-esta/angular-public/autocomplete';
import { Subject } from 'rxjs';

@Component({
  selector: 'sbb-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ChipInputComponent)
    }
  ]
})
export class ChipInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input()
  options: string[] = [];

  @Input('sbbAutocomplete')
  autocomplete: AutocompleteComponent;

  @Input()
  get disabled() {
    return this._disabled;
  }

  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  inputModel = '';
  selectedOptions: string[] = [];
  focus = false;

  private _disabled = false;
  private _onTouchedCallback: () => void;
  private _onChangeCallback: (_: any) => void;
  private _control: FormControl;

  readonly stateChanges = new Subject<void>();

  get isActive() {
    return !this.disabled && this.focus;
  }

  get isInvalid() {
    return this._control ? this._control.invalid : false;
  }

  constructor(
    private _injector: Injector,
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.autocomplete) {
      this.autocomplete.optionSelected.subscribe(event => this.selectOption(event.option.value));
    }
  }

  ngAfterViewInit(): void {
    const ngControl: NgControl = this._injector.get(NgControl, null);
    if (ngControl) {
      this._control = ngControl.control as FormControl;
    }
  }

  writeValue(obj: string[]): void {
    if (obj) {
      this.selectedOptions = obj;
    } else {
      this.selectedOptions = [];
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  selectOption(option: string) {
    if (!this.selectedOptions) {
      this.selectedOptions = [];
    }
    if (!this.selectedOptions.includes(option)) {
      this.writeValue(this.selectedOptions.concat([option]));
      this._onChangeCallback(this.selectedOptions);
      this._onTouchedCallback();
    }
    this.inputModel = null;
  }

  deselectOption(option: string) {
    const index = this.selectedOptions.findIndex(opt => opt === option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
      if (this.selectedOptions.length === 0) {
        this.selectedOptions = null;
      }
      this._onChangeCallback(this.selectedOptions);
      this._onTouchedCallback();
    }
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }
}

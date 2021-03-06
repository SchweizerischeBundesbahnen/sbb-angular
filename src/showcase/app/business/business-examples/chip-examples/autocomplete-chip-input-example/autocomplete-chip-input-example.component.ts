import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sbb-chip-autocomplete-example',
  templateUrl: './autocomplete-chip-input-example.component.html',
})
export class AutocompleteChipInputExampleComponent {
  formGroup: FormGroup;
  options = [
    'option-1',
    'option-2',
    'option-3',
    'massively-and-incredibly-long-texted-option',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'something else',
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      chip: [['option-1'], Validators.required],
    });
  }

  onSubmit(event: Event) {
    console.log(event);
  }
}

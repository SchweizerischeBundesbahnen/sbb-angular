import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteModule } from '@sbb-esta/angular-business/autocomplete';
import { IconCrossModule } from '@sbb-esta/angular-icons';

import { ChipInputComponent } from './chip-input/chip-input.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [ChipComponent, ChipInputComponent],
  imports: [IconCrossModule, AutocompleteModule, CommonModule, FormsModule],
  exports: [ChipInputComponent, ChipComponent]
})
export class ChipModule {}

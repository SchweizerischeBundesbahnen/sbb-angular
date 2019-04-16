import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './option/highlight.pipe';
import { OptionComponent } from './option/option.component';
import { OptionGroupComponent } from './option-group/option-group.component';
import { PseudoCheckboxComponent } from './option/pseudo-checkbox';
import { IconTickModule } from 'sbb-angular-icons';

@NgModule({
  imports: [
    CommonModule,
    IconTickModule,
  ],
  declarations: [
    OptionComponent,
    OptionGroupComponent,
    HighlightPipe,
    PseudoCheckboxComponent
  ],
  exports: [
    OptionComponent,
    OptionGroupComponent,
    HighlightPipe,
    PseudoCheckboxComponent
  ]
})
export class OptionModule { }

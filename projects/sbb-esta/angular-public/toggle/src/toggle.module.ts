import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDirectiveModule } from '@sbb-esta/angular-core/icon-directive';

import { ToggleOptionIconDirective } from './toggle-option/toggle-option-icon.directive';
import { ToggleOptionComponent } from './toggle-option/toggle-option.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [ToggleComponent, ToggleOptionComponent, ToggleOptionIconDirective],
  imports: [CommonModule, IconDirectiveModule],
  exports: [ToggleComponent, ToggleOptionComponent, ToggleOptionIconDirective, IconDirectiveModule]
})
export class ToggleModule {}

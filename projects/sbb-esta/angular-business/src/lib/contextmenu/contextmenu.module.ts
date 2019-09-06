import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconContextMenuModule } from '@sbb-esta/angular-icons';

import { DropdownModule } from '../dropdown/dropdown';

import { ContextmenuComponent } from './contextmenu/contextmenu.component';

@NgModule({
  imports: [CommonModule, IconContextMenuModule, DropdownModule],
  declarations: [ContextmenuComponent],
  exports: [ContextmenuComponent, DropdownModule]
})
export class ContextmenuModule {}

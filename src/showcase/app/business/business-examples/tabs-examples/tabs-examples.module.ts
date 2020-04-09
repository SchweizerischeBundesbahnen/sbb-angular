import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '@sbb-esta/angular-business/checkbox';
import { FieldModule } from '@sbb-esta/angular-business/field';
import { TabsModule } from '@sbb-esta/angular-business/tabs';

import { PersonListComponent } from './tabs-example/person-list/person-list.component';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';

const EXAMPLES = [PersonListComponent, TabsExampleComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    FieldModule,
    TabsModule
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES
})
export class TabsExamplesModule {}

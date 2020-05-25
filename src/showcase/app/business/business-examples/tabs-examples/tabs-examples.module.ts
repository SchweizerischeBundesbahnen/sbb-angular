import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '@sbb-esta/angular-business/checkbox';
import { FieldModule } from '@sbb-esta/angular-business/field';
import { TabsModule } from '@sbb-esta/angular-business/tabs';

import { PeopleListComponent } from './tabs-example/people-list/people-list.component';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';

const EXAMPLES = [PeopleListComponent, TabsExampleComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    FieldModule,
    TabsModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class TabsExamplesModule {}

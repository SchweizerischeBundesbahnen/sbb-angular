import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '@sbb-esta/angular-business/checkbox';

import { provideExamples } from '../../../shared/example-provider';

import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { CheckboxGroupHorizontalExampleComponent } from './checkbox-group-horizontal-example/checkbox-group-horizontal-example.component';
import { CheckboxGroupReactiveFormsVerticalExampleComponent } from './checkbox-group-reactive-forms-vertical-example/checkbox-group-reactive-forms-vertical-example.component';
import { CheckboxIndeterminateStateExampleComponent } from './checkbox-indeterminate-state-example/checkbox-indeterminate-state-example.component';

const EXAMPLES = [
  CheckboxExampleComponent,
  CheckboxGroupHorizontalExampleComponent,
  CheckboxGroupReactiveFormsVerticalExampleComponent,
  CheckboxIndeterminateStateExampleComponent,
];

const EXAMPLE_INDEX = {
  'checkbox-group-reactive-forms-vertical-example': CheckboxGroupReactiveFormsVerticalExampleComponent,
  'checkbox-group-horizontal-example': CheckboxGroupHorizontalExampleComponent,
  'checkbox-indeterminate-state-example': CheckboxIndeterminateStateExampleComponent,
  'checkbox-example': CheckboxExampleComponent,
};

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('business', 'checkbox', EXAMPLE_INDEX)],
})
export class CheckboxExamplesModule {}

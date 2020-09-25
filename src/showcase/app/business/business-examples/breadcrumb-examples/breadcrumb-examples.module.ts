import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbbBreadcrumbModule } from '@sbb-esta/angular-business/breadcrumb';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';

import { provideExamples } from '../../../shared/example-provider';

import { BreadcrumbExampleComponent } from './breadcrumb-example/breadcrumb-example.component';

const EXAMPLES = [BreadcrumbExampleComponent];

const EXAMPLE_INDEX = {
  'breadcrumb-example': BreadcrumbExampleComponent,
};

@NgModule({
  imports: [CommonModule, RouterModule, SbbBreadcrumbModule, SbbIconModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('business', 'breadcrumb', EXAMPLE_INDEX)],
})
export class BreadcrumbExamplesModule {}

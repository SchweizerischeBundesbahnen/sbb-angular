import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { SbbIconModule } from '@sbb-esta/angular/icon';

import { SbbProcessflow, SbbStep } from './processflow';
import { SbbProcessflowNext, SbbProcessflowPrevious } from './processflow-button';
import { SbbProcessflowIcon } from './processflow-icon';
import { SbbStepContent } from './step-content';
import { SbbStepHeader } from './step-header';
import { SbbStepLabel } from './step-label';

@NgModule({
  imports: [CommonModule, PortalModule, SbbButtonModule, CdkStepperModule, SbbIconModule],
  exports: [
    SbbStep,
    SbbStepLabel,
    SbbProcessflow,
    SbbProcessflowNext,
    SbbProcessflowPrevious,
    SbbStepHeader,
    SbbProcessflowIcon,
    SbbStepContent,
  ],
  declarations: [
    SbbStep,
    SbbStepLabel,
    SbbProcessflow,
    SbbProcessflowNext,
    SbbProcessflowPrevious,
    SbbStepHeader,
    SbbProcessflowIcon,
    SbbStepContent,
  ],
})
export class SbbProcessflowModule {}

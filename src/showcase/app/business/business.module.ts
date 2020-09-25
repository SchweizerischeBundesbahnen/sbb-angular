import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbAccordionModule } from '@sbb-esta/angular-business/accordion';
import { SbbSidebarModule } from '@sbb-esta/angular-business/sidebar';
import { SbbTabsModule } from '@sbb-esta/angular-business/tabs';

import { SharedModule } from '../shared/shared.module';

import { BusinessComponentViewerComponent } from './business-component-viewer/business-component-viewer.component';
import { BusinessExampleViewerComponent } from './business-example-viewer/business-example-viewer.component';
import { BusinessExamplesModule } from './business-examples/business-examples.module';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    BusinessComponent,
    BusinessComponentViewerComponent,
    BusinessExampleViewerComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,
    BusinessExamplesModule,
    SharedModule,
    SbbTabsModule,
    BusinessRoutingModule,
    SbbSidebarModule,
    SbbAccordionModule,
  ],
})
export class BusinessModule {}

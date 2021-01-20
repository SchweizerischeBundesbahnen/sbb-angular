import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbAccordionModule } from '@sbb-esta/angular-business/accordion';
import { SbbSidebarModule } from '@sbb-esta/angular-business/sidebar';
import { SbbEsriConfigModule } from '@sbb-esta/angular-maps/esri-config';

import { ComponentViewerModule } from '../shared/component-viewer/component-viewer.module';
import { SharedModule } from '../shared/shared.module';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    SbbEsriConfigModule.forRoot({ portalUrl: 'https://www.arcgis.com' }),
    CommonModule,
    PortalModule,
    SharedModule,
    ComponentViewerModule,
    MapsRoutingModule,
    SbbAccordionModule,
    SbbSidebarModule,
  ],
})
export class MapsModule {}

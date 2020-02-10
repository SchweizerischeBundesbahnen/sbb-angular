import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from '@sbb-esta/angular-business/tabs';
import { EsriConfigModule } from '@sbb-esta/angular-maps';

import { SharedModule } from '../shared/shared.module';

import { MapsExamplesModule } from './maps-examples/maps-examples.module';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    EsriConfigModule.forRoot({ portalUrl: 'https://www.arcgis.com' }),
    CommonModule,
    MapsRoutingModule,
    ScrollingModule,
    PortalModule,
    MapsExamplesModule,
    SharedModule,
    TabsModule
  ]
})
export class MapsModule {}

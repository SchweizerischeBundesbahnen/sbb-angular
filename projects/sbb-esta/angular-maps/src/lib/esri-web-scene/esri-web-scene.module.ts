import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { EsriTypesService } from './esri-types/esri-types.service';
import { EsriWebSceneComponent } from './esri-web-scene.component';

@NgModule({
  declarations: [EsriWebSceneComponent],
  providers: [EsriTypesService],
  imports: [CommonModule, CoreModule],
  exports: [EsriWebSceneComponent]
})
export class EsriWebSceneModule {}

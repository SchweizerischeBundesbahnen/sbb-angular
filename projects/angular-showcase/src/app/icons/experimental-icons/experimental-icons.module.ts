import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@sbb-esta/angular-business/tooltip';
import { ScrollingModule } from '@sbb-esta/angular-core/scrolling';
import { ICON_CLASS_LIST, ICON_MODULE_LIST } from '@sbb-esta/angular-icons/experimental/_meta';
import { CheckboxPanelModule } from '@sbb-esta/angular-public/checkbox-panel';
import { SearchModule } from '@sbb-esta/angular-public/search';

import { ExperimentalIconSearchComponent } from './experimental-icon-search/experimental-icon-search.component';
import { ExperimentalIconsRoutingModule } from './experimental-icons-routing.module';

@NgModule({
  declarations: [ExperimentalIconSearchComponent],
  entryComponents: [...ICON_CLASS_LIST],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortalModule,
    CheckboxPanelModule,
    ScrollingModule,
    SearchModule,
    TooltipModule,
    ExperimentalIconsRoutingModule,
    ...ICON_MODULE_LIST
  ]
})
export class ExperimentalIconsModule {}

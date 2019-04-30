import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChevronRightModule, IconChevronSmallDownModule } from 'sbb-angular-icons';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropdownModule } from '../dropdown/dropdown';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [BreadcrumbsComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    DropdownModule,
    LayoutModule,
    IconChevronRightModule,
    IconChevronSmallDownModule
  ],
  exports: [BreadcrumbsComponent, BreadcrumbComponent]
})
export class BreadcrumbModule { }

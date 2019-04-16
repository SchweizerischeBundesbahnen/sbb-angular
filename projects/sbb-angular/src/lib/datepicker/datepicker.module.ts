import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DatepickerComponent,
  SBB_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
} from './datepicker/datepicker.component';
import { DatepickerToggleComponent } from './datepicker-toggle/datepicker-toggle.component';
import { DatepickerContentComponent } from './datepicker-content/datepicker-content.component';
import { CalendarComponent, CalendarHeaderComponent } from './calendar/calendar.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { DateInputDirective } from './date-input/date-input.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { DateAdapter } from './date-adapter';
import { NativeDateAdapter } from './native-date-adapter';
import { SBB_DATE_FORMATS } from './date-formats';
import { DATE_PIPE_DATE_FORMATS } from './date-pipe-date-formats';
import { IconChevronSmallLeftModule, IconChevronSmallRightModule, IconCalendarModule } from 'sbb-angular-icons';

@NgModule({
  imports: [
    CommonModule,
    IconChevronSmallLeftModule,
    IconChevronSmallRightModule,
    IconCalendarModule,
    PortalModule,
    A11yModule,
    OverlayModule
  ],
  declarations: [
    DatepickerComponent,
    DatepickerToggleComponent,
    DatepickerContentComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    MonthViewComponent,
    CalendarBodyComponent,
    DateInputDirective,
  ],
  exports: [
    DatepickerComponent,
    DatepickerToggleComponent,
    DatepickerContentComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    MonthViewComponent,
    CalendarBodyComponent,
    DateInputDirective,
  ],
  providers: [
    SBB_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: SBB_DATE_FORMATS, useValue: DATE_PIPE_DATE_FORMATS }
  ],
  entryComponents: [
    DatepickerContentComponent,
    CalendarHeaderComponent
  ]
})
export class DatepickerModule { }

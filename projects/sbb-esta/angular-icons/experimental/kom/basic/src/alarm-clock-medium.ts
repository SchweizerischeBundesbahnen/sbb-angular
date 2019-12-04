/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAlarmClockMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18 6.75c6.215 0 11.25 5.037 11.25 11.25 0 6.214-5.035 11.25-11.25 11.25-6.213 0-11.25-5.036-11.25-11.25 0-6.213 5.037-11.25 11.25-11.25zm-12.75 3l4.5-4.5m16.5 0l4.5 4.5m-13.5.75v8.25h8.25"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconAlarmClockMedium {}

@Component({
  selector: 'sbb-icon-alarm-clock-medium',
  template: `
    <svg sbbIconAlarmClockMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAlarmClockMedium {}

@NgModule({
  declarations: [SvgIconAlarmClockMedium, IconAlarmClockMedium],
  exports: [SvgIconAlarmClockMedium, IconAlarmClockMedium]
})
export class IconAlarmClockMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCalendarMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 9.765h22.5v16.5l-22.5-.045V9.765zm0 4.515h22.5m-9.75 2.97h7.47M9 20.25h7.5m-7.5 3h7.5m3-3H27m-7.5 3H27M11.25 12V7.5m13.5 4.5V7.5"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCalendarMedium {}

@Component({
  selector: 'sbb-icon-calendar-medium',
  template: ` <svg sbbIconCalendarMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCalendarMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCalendarMedium, IconCalendarMedium],
  exports: [SvgIconCalendarMedium, IconCalendarMedium],
})
export class IconCalendarMediumModule {}

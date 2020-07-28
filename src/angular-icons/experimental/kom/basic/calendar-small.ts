/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCalendarSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.5 6.51h15v11l-15-.03V6.51zm0 3.01h15M13 11.5h4.98M6 13.5h5m-5 2h5m2-2h5m-5 2h5M7.5 8V5m9 3V5"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCalendarSmall {}

@Component({
  selector: 'sbb-icon-calendar-small',
  template: ` <svg sbbIconCalendarSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCalendarSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCalendarSmall, IconCalendarSmall],
  exports: [SvgIconCalendarSmall, IconCalendarSmall],
})
export class IconCalendarSmallModule {}

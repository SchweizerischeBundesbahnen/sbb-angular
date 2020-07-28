/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWheelchairPartiallySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.7 10.93a4.012 4.012 0 00-2.198 3.567c0 2.2 1.802 4 4 4a4.015 4.015 0 003.62-2.303M4.7 4.5C3.4 6.3 2.4 8.7 2.4 12s1 5.6 2.3 7.5m14.4 0c1.3-1.8 2.3-4.2 2.3-7.5s-1-5.6-2.3-7.5M10.5 8v5.5h5V19M11 6a.5.5 0 11-1 0 .5.5 0 011 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWheelchairPartiallySmall {}

@Component({
  selector: 'sbb-icon-wheelchair-partially-small',
  template: ` <svg sbbIconWheelchairPartiallySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairPartiallySmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWheelchairPartiallySmall, IconWheelchairPartiallySmall],
  exports: [SvgIconWheelchairPartiallySmall, IconWheelchairPartiallySmall],
})
export class IconWheelchairPartiallySmallModule {}

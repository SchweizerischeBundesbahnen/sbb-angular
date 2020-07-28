/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWheelchairSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.5 8v5.5h5V19M11 6a.5.5 0 11-1 0 .5.5 0 011 0zm-2.297 4.932A4.014 4.014 0 006.505 14.5c0 2.198 1.802 4 4 4a4.016 4.016 0 003.62-2.304"
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
export class SvgIconWheelchairSmall {}

@Component({
  selector: 'sbb-icon-wheelchair-small',
  template: ` <svg sbbIconWheelchairSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWheelchairSmall, IconWheelchairSmall],
  exports: [SvgIconWheelchairSmall, IconWheelchairSmall],
})
export class IconWheelchairSmallModule {}

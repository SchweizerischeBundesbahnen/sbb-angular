/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconWheelchairInaccessibleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M7.5 12l18.75 18.75m-3-7.5v-3h-3m-4.5-4.5V12m-3.42 4.83a6.005 6.005 0 00-2.581 4.92c0 3.3 2.703 6 6 6 2.03 0 3.828-1.028 4.915-2.585M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0zm6.75 18.75v.75"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWheelchairInaccessibleMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wheelchair-inaccessible-medium',
  template: ` <svg sbbIconWheelchairInaccessibleMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairInaccessibleMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWheelchairInaccessibleMedium, IconWheelchairInaccessibleMedium],
  exports: [SvgIconWheelchairInaccessibleMedium, IconWheelchairInaccessibleMedium],
})
export class IconWheelchairInaccessibleMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCarParkingMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30.75 27.75h-18V16.5a3.75 3.75 0 013.75-3.75H27a3.75 3.75 0 013.75 3.75v11.25zm-27-13.5h6v-7.5h-6v7.5zm3 0V31.5m6-3.75v3h4.5v-3m9.002 0v3h4.498v-3m-18-8.999H10.5m22.5 0h-2.25m0 1.5h-18m15-.001a3.001 3.001 0 00-6 0M17.25 24a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm10.5 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCarParkingMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-car-parking-medium',
  template: ` <svg sbbIconCarParkingMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCarParkingMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCarParkingMedium, IconCarParkingMedium],
  exports: [SvgIconCarParkingMedium, IconCarParkingMedium],
})
export class IconCarParkingMediumModule {}

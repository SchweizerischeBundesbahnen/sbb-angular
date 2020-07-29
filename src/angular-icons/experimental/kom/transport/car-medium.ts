/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCarMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12.75 21a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm12 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm-16.5 3.75v3h4.5v-3m10.502 0v3h4.498v-3M8.25 15.75H6m24 0h-2.25m0 1.5H8.25M24 9.751c2.559 0 3.75 1.19 3.75 3.75v11.25H8.25V13.5c0-2.56 1.191-3.75 3.75-3.75h12m.75 7.5a3 3 0 00-6 0"
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
export class SvgIconCarMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-car-medium',
  template: ` <svg sbbIconCarMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCarMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCarMedium, IconCarMedium],
  exports: [SvgIconCarMedium, IconCarMedium],
})
export class IconCarMediumModule {}

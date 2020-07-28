/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBusMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 27.75v3h4.5v-3m13.502 0v3h4.498v-3M25.5 8.25h-15m18.75 9.001H6.75m0-3h-1.5v1.5h1.5M25.5 5.25c2.559 0 3.75 1.19 3.75 3.75v18.75H6.75V9c0-2.56 1.191-3.75 3.75-3.75h15zM11.25 24a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm15 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm3-8.25h1.5v-1.5h-1.5"
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
export class SvgIconBusMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-bus-medium',
  template: ` <svg sbbIconBusMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBusMedium, IconBusMedium],
  exports: [SvgIconBusMedium, IconBusMedium],
})
export class IconBusMediumModule {}

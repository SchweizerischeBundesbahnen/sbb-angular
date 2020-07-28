/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconHandshakeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M28.458 22.7l-6.333-6.575L15.3 19.5c-1.831.918-3.562-1.041-2.176-2.7 3.35-3.653 6.099-7.113 9.075-6.15l6 1.875 4.05-2.25V20.55L20.1 27.3s-.858.45-2.101.45c-1.242 0-2.1-.45-2.1-.45L3.75 20.55V10.275l4.051 2.25 5.852-1.84c1.689-.422 3.159.007 4.446 1.136"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHandshakeMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-handshake-medium',
  template: ` <svg sbbIconHandshakeMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandshakeMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconHandshakeMedium, IconHandshakeMedium],
  exports: [SvgIconHandshakeMedium, IconHandshakeMedium],
})
export class IconHandshakeMediumModule {}

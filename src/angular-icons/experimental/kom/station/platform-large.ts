/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconPlatformLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12.506 32a1.5 1.5 0 10-3 .001 1.5 1.5 0 003-.001zm3-5.5h-11.5m6-18H4m4.006 9H4.002m3.004-9l-2 6h5.99c3.008 0 4.51 1.477 4.51 4.367V37.5h-11.5m7 0l3 5.5m1-2.5H4m39.506-36h-23.5c-.822 0-1.5.678-1.5 1.5v1.5h25v-3zm-20 9h10v-4h-10v4zm2-6v2m6-2v2m-13 28h25v-2h-25v2zm21-2h2v-28h-2v28zm-19 2V43"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconPlatformLarge {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-platform-large',
  template: ` <svg sbbIconPlatformLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPlatformLarge {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconPlatformLarge, IconPlatformLarge],
  exports: [SvgIconPlatformLarge, IconPlatformLarge],
})
export class IconPlatformLargeModule {}

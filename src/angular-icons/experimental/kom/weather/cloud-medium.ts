/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCloudMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.751 15.33c-3.211 0-3.849 6.42 1.2 6.42h10.5c4.982 0 4.8-6.42 1.05-6.27 1.65-5.525-5.7-8.063-7.95-2.987-1.981-1.615-5.148-.064-4.8 2.837z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCloudMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-medium',
  template: ` <svg sbbIconCloudMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCloudMedium, IconCloudMedium],
  exports: [SvgIconCloudMedium, IconCloudMedium],
})
export class IconCloudMediumModule {}

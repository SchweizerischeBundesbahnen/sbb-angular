/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconScannerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 6.5V5.2c0-.844.91-1.7 1.7-1.7h13.6c.764 0 1.7 1.053 1.7 1.7v1.3l-2 4 2 6v2.2c0 .785-.826 1.8-1.7 1.8H5.2c-.874 0-1.7-.838-1.7-1.7v-2.3l2-6-2-4zm0 0h17m-15 4h13m-15 6h17m-4.5 2h2"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconScannerSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-scanner-small',
  template: ` <svg sbbIconScannerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconScannerSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconScannerSmall, IconScannerSmall],
  exports: [SvgIconScannerSmall, IconScannerSmall],
})
export class IconScannerSmallModule {}

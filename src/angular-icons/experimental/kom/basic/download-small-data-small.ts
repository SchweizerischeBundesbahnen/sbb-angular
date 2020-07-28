/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDownloadSmallDataSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8 6.5H3.5v11h16v-11H15m-6.003.492L11.5 9.5 14 7m-2.5-4v6.5m-6.5 6h13"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconDownloadSmallDataSmall {}

@Component({
  selector: 'sbb-icon-download-small-data-small',
  template: ` <svg sbbIconDownloadSmallDataSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDownloadSmallDataSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDownloadSmallDataSmall, IconDownloadSmallDataSmall],
  exports: [SvgIconDownloadSmallDataSmall, IconDownloadSmallDataSmall],
})
export class IconDownloadSmallDataSmallModule {}

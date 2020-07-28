/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDownloadLargeDataSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8 6.5H3.5v11h16v-11H15m-10 5h13M5 13.494h13M5 15.501h13m-9.003-8.51L11.5 9.5 14 7m-2.5-4v6.5"
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
export class SvgIconDownloadLargeDataSmall {}

@Component({
  selector: 'sbb-icon-download-large-data-small',
  template: ` <svg sbbIconDownloadLargeDataSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDownloadLargeDataSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDownloadLargeDataSmall, IconDownloadLargeDataSmall],
  exports: [SvgIconDownloadLargeDataSmall, IconDownloadLargeDataSmall],
})
export class IconDownloadLargeDataSmallModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDownloadLargeDataMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 9.75H5.25v16.5h24V9.75H22.5m-15 7.5H27M7.5 20.241H27m-19.5 3.01H27M13.496 10.489l3.754 3.762L21 10.5m-3.75-6v9.75"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconDownloadLargeDataMedium {}

@Component({
  selector: 'sbb-icon-download-large-data-medium',
  template: `
    <svg sbbIconDownloadLargeDataMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDownloadLargeDataMedium {}

@NgModule({
  declarations: [SvgIconDownloadLargeDataMedium, IconDownloadLargeDataMedium],
  exports: [SvgIconDownloadLargeDataMedium, IconDownloadLargeDataMedium]
})
export class IconDownloadLargeDataMediumModule {}
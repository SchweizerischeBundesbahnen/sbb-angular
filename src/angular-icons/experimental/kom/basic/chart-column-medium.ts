/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChartColumnMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.5 30.75H33 4.5zm.75-3v-4.5h4.5v4.5h-4.5zm7.5 0v-16.5h4.5v16.5h-4.5zm7.5 0v-13.5h4.5v13.5h-4.5zm7.5 0v-21h4.5v21h-4.5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconChartColumnMedium {}

@Component({
  selector: 'sbb-icon-chart-column-medium',
  template: ` <svg sbbIconChartColumnMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChartColumnMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconChartColumnMedium, IconChartColumnMedium],
  exports: [SvgIconChartColumnMedium, IconChartColumnMedium],
})
export class IconChartColumnMediumModule {}

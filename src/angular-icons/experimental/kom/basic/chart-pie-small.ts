/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChartPieSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.5 12.5a8 8 0 11-16 0 8 8 0 0116 0zm-8-8v8l6.928 4m-6.928-4l6.928-4"
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
export class SvgIconChartPieSmall {}

@Component({
  selector: 'sbb-icon-chart-pie-small',
  template: ` <svg sbbIconChartPieSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChartPieSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconChartPieSmall, IconChartPieSmall],
  exports: [SvgIconChartPieSmall, IconChartPieSmall],
})
export class IconChartPieSmallModule {}

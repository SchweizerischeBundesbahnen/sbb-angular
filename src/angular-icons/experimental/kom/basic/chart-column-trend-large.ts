/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconChartColumnTrendLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30.662 19.873a2 2 0 11-2.326 3.253 2 2 0 012.326-3.253l7.676-10.746a2 2 0 102.323-3.256 2 2 0 00-2.323 3.256l-7.676 10.746zM21.5 43.5h6v-12h4v12h6v-24h4v24h-34v-8h4v8h6v-16h4v16zm-10-18a2 2 0 11-4.001-.001 2 2 0 014.001.001zm9.837-7.207l6.326 2.415-6.326-2.415zm-10.275 5.958l6.876-5.502-6.876 5.502zM21.5 17.5a2 2 0 11-4.001-.001 2 2 0 014.001.001z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconChartColumnTrendLarge {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-chart-column-trend-large',
  template: ` <svg sbbIconChartColumnTrendLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChartColumnTrendLarge {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconChartColumnTrendLarge, IconChartColumnTrendLarge],
  exports: [SvgIconChartColumnTrendLarge, IconChartColumnTrendLarge],
})
export class IconChartColumnTrendLargeModule {}

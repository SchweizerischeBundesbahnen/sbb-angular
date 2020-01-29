/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChartColumnSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3 20.5h19H3zm.5-2v-3h3v3h-3zm5 0v-11h3v11h-3zm5 0v-9h3v9h-3zm5 0v-14h3v14h-3z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconChartColumnSmall {}

@Component({
  selector: 'sbb-icon-chart-column-small',
  template: `
    <svg sbbIconChartColumnSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChartColumnSmall {}

@NgModule({
  declarations: [SvgIconChartColumnSmall, IconChartColumnSmall],
  exports: [SvgIconChartColumnSmall, IconChartColumnSmall]
})
export class IconChartColumnSmallModule {}

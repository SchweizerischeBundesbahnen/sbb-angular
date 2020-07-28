/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCombinedMobilityMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M27.75 25.5a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm-16.5 3.75v3h4.5v-3m10.502 0v3h4.498v-3M33 20.25h-2.25m0 1.5H18m9.75-.001a3.001 3.001 0 00-6 0m-6.75 3a.75.75 0 100 1.5.75.75 0 000-1.5zm-3.75 3.75v.75h19.5V18c0-2.558-1.191-3.75-3.75-3.75h-1.5m-5.25-6l1.405 3.094M28.5 7.5L6 30M9 9.75A5.256 5.256 0 0114.25 15 5.255 5.255 0 019 20.25 5.255 5.255 0 013.75 15 5.256 5.256 0 019 9.75M9 15l3-6.75h8.25l3-4.5H18m-8.687 1.5H13.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCombinedMobilityMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-combined-mobility-medium',
  template: ` <svg sbbIconCombinedMobilityMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCombinedMobilityMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCombinedMobilityMedium, IconCombinedMobilityMedium],
  exports: [SvgIconCombinedMobilityMedium, IconCombinedMobilityMedium],
})
export class IconCombinedMobilityMediumModule {}

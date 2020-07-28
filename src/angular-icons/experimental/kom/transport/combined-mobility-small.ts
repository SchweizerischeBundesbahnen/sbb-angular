/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCombinedMobilitySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.5 17a.5.5 0 10-1.002.001A.5.5 0 0018.5 17zm-11 2.5v2h3v-2m7.001 0v2H20.5v-2m1.5-6h-1.5m0 1H12m6.5 0a2 2 0 00-4 0m-4.5 2a.5.5 0 100 1 .5.5 0 000-1zM7.5 19v.5h13V12c0-1.705-.794-2.5-2.5-2.5h-1m-3.5-4l.937 2.063M19 5L4 20M6 6.5c1.93 0 3.5 1.57 3.5 3.5S7.93 13.5 6 13.5 2.5 11.93 2.5 10 4.07 6.5 6 6.5M6 10l2-4.5h5.5l2-3H12m-5.792 1h2.793"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCombinedMobilitySmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-combined-mobility-small',
  template: ` <svg sbbIconCombinedMobilitySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCombinedMobilitySmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCombinedMobilitySmall, IconCombinedMobilitySmall],
  exports: [SvgIconCombinedMobilitySmall, IconCombinedMobilitySmall],
})
export class IconCombinedMobilitySmallModule {}

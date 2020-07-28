/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUtilizationHigh]',
  template: `
    <svg:g fill="#EB0000" fill-rule="evenodd">
      <svg:path
        d="M2.5 3C3.327 3 4 2.327 4 1.5S3.327 0 2.5 0 1 .673 1 1.5 1.673 3 2.5 3M9.504 3c.827 0 1.5-.673 1.5-1.5S10.33 0 9.504 0s-1.5.673-1.5 1.5.673 1.5 1.5 1.5M16.508 3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5M0 10h1v6h3v-6h1V4H0zM7.004 10h1v6h3v-6h1V4h-5zM14 4v6h1v6h3v-6h1V4z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 19px;
        height: 16px;
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
    viewBox: '0 0 19 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-him-cus',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUtilizationHigh {}

@Component({
  selector: 'sbb-icon-utilization-high',
  template: ` <svg sbbIconUtilizationHigh></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUtilizationHigh {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconUtilizationHigh, IconUtilizationHigh],
  exports: [SvgIconUtilizationHigh, IconUtilizationHigh],
})
export class IconUtilizationHighModule {}

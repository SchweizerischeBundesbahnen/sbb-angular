/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocationPinMapSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.5 9V7.3l-5-2.7-5 4-5-3.6v8.75l5 3.65 5-4 .8.9M8.5 8.6v8.8m5-12.8v8.8m6.997-.212c0-1.485-1.118-2.688-2.497-2.688-1.378 0-2.496 1.204-2.496 2.688.016.461.143.85.347 1.215l2.157 3.665 2.155-3.665c.201-.38.33-.774.334-1.215zM18.5 13a.5.5 0 01-.495.5.508.508 0 01-.505-.5c0-.273.227-.5.5-.5s.5.227.5.5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLocationPinMapSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-map-small',
  template: ` <svg sbbIconLocationPinMapSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinMapSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLocationPinMapSmall, IconLocationPinMapSmall],
  exports: [SvgIconLocationPinMapSmall, IconLocationPinMapSmall],
})
export class IconLocationPinMapSmallModule {}

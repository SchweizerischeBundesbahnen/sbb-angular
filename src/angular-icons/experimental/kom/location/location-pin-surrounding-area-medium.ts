/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocationPinSurroundingAreaMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M23.262 12.01a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0zm2.988.012a8.25 8.25 0 00-16.5 0c.056 1.414.474 2.605 1.149 3.729l7.125 11.247 7.125-11.247c.665-1.166 1.089-2.378 1.101-3.73zm-13.047 11.49c-5.525.626-9.453 2.298-9.453 4.238 0 2.466 6.348 4.5 14.25 4.5 7.903 0 14.25-2.034 14.25-4.5 0-1.925-3.87-3.587-9.327-4.223"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLocationPinSurroundingAreaMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-surrounding-area-medium',
  template: ` <svg sbbIconLocationPinSurroundingAreaMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinSurroundingAreaMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLocationPinSurroundingAreaMedium, IconLocationPinSurroundingAreaMedium],
  exports: [SvgIconLocationPinSurroundingAreaMedium, IconLocationPinSurroundingAreaMedium],
})
export class IconLocationPinSurroundingAreaMediumModule {}

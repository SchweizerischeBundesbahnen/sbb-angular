/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocationPinPulseSurroundingAreaSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 8.015a5.5 5.5 0 00-11 0c.037.943.316 1.736.766 2.485l4.75 7.499 4.75-7.5c.443-.775.726-1.584.734-2.484zm-8.698 7.66C5.119 16.09 2.5 17.206 2.5 18.5c0 1.645 4.232 3 9.5 3 5.269 0 9.5-1.355 9.5-3 0-1.284-2.58-2.392-6.218-2.816M6.787 9.5H9l1.5-4 1.5 6 1.5-4 1 1.99h2.734"
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
export class SvgIconLocationPinPulseSurroundingAreaSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-pulse-surrounding-area-small',
  template: ` <svg sbbIconLocationPinPulseSurroundingAreaSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinPulseSurroundingAreaSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [
    SvgIconLocationPinPulseSurroundingAreaSmall,
    IconLocationPinPulseSurroundingAreaSmall,
  ],
  exports: [SvgIconLocationPinPulseSurroundingAreaSmall, IconLocationPinPulseSurroundingAreaSmall],
})
export class IconLocationPinPulseSurroundingAreaSmallModule {}

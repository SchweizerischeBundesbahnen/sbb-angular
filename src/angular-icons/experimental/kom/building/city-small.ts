/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCitySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 17v-2 2zm0-4v-2 2zm2 4v-2 2zm0-4v-2 2zm-6 4v-2 2zm0-4v-2 2zm0-4V7v2zm-2 8v-2 2zm0-4v-2 2zm0-4V7v2zm-2 8v-2 2zm0-4v-2 2zm0-4V7v2zM6 8.5H4h2zm0-3H4h2zm0 6H4h2zm0 3H4h2zm9.5 5h-8 8zm-8-2h-5 5zm14 2h-6 6zM2.5 22V3.5l5-1v19m0 .5V4.5h8V22m0-13.5h6V22"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-building',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCitySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-city-small',
  template: ` <svg sbbIconCitySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCitySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCitySmall, IconCitySmall],
  exports: [SvgIconCitySmall, IconCitySmall],
})
export class IconCitySmallModule {}

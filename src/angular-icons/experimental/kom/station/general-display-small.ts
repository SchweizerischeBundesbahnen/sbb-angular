/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconGeneralDisplaySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 7.5V10m2.001-4.5V4M4.499 5.5V4M19.5 9.5c0 1.116-.884 2-2 2-1.115 0-2-.884-2-2s.885-2 2-2c1.116 0 2 .884 2 2zm-17 10h19v-14h-19v14zM4 7.5h10m-10 2h10m-10 2h10m-10 2h10m-10 2h10m-10 2h10"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconGeneralDisplaySmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-general-display-small',
  template: ` <svg sbbIconGeneralDisplaySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGeneralDisplaySmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconGeneralDisplaySmall, IconGeneralDisplaySmall],
  exports: [SvgIconGeneralDisplaySmall, IconGeneralDisplaySmall],
})
export class IconGeneralDisplaySmallModule {}

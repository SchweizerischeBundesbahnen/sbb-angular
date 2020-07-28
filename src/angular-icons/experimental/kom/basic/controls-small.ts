/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconControlsSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.5 6.5c0 1.165-.835 2-2 2s-2-.835-2-2 .835-2 2-2 2 .835 2 2zm7 6c0 1.13-.869 2-2 2s-2-.87-2-2 .869-2 2-2 2 .87 2 2zm-7 6c0 1.148-.852 2-2 2-1.148 0-2-.852-2-2 0-1.147.852-2 2-2 1.148 0 2 .853 2 2zm-4-12H2h4.5zm4 0H22 10.5zm7 6H22h-4.5zm-4 0H2h11.5zm-7 6H2h4.5zm4 0H22 10.5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconControlsSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-controls-small',
  template: ` <svg sbbIconControlsSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconControlsSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconControlsSmall, IconControlsSmall],
  exports: [SvgIconControlsSmall, IconControlsSmall],
})
export class IconControlsSmallModule {}

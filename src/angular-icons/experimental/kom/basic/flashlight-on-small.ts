/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconFlashlightOnSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.503 21.5H14.5v-10H8.503v10zM15.5 9l-1 2.5h-6L7.5 9V6.5h8V9zm-5 10.5h2v-6h-2v6zm1-4.5v1m-4-7h8m-4-7v3M14 5l2-3M9 5L7 2"
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
export class SvgIconFlashlightOnSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-flashlight-on-small',
  template: ` <svg sbbIconFlashlightOnSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFlashlightOnSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconFlashlightOnSmall, IconFlashlightOnSmall],
  exports: [SvgIconFlashlightOnSmall, IconFlashlightOnSmall],
})
export class IconFlashlightOnSmallModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHeartMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30.299 11.664A7.466 7.466 0 0023.25 6.75c-2.478 0-4.636 1.196-5.995 3.027C15.89 7.946 13.727 6.75 11.25 6.75a7.475 7.475 0 00-7.509 7.496c0 1.305.329 2.53.908 3.595.328.605.72 1.157 1.188 1.644L17.25 30.9 28.65 19.5c.27-.327.909-1.152 1.119-1.522a7.506 7.506 0 00.982-3.732c0-.91-.159-1.778-.451-2.582z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHeartMedium {}

@Component({
  selector: 'sbb-icon-heart-medium',
  template: ` <svg sbbIconHeartMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHeartMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconHeartMedium, IconHeartMedium],
  exports: [SvgIconHeartMedium, IconHeartMedium],
})
export class IconHeartMediumModule {}

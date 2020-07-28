/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconMetadataMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M27 22.5l-3-3m0 6l3-3-3-3m-15-6l3 3m0-6l-3 3 3 3M3.75 30.75h28.5V5.25H3.75v25.5zM15 11.25h12M9 24.75h12m-6-9h7.5m1.5 0h3m-18 4.5h3m1.5 0H21"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconMetadataMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-metadata-medium',
  template: ` <svg sbbIconMetadataMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMetadataMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconMetadataMedium, IconMetadataMedium],
  exports: [SvgIconMetadataMedium, IconMetadataMedium],
})
export class IconMetadataMediumModule {}

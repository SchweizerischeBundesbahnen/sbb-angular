/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSpannerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M21.14 4.86L18.5 7.5h-2v-2l2.64-2.64a3.984 3.984 0 00-1.64-.36 4 4 0 00-4 4c0 .586.133 1.138.36 1.64l-5.72 5.72a3.968 3.968 0 00-1.64-.36 4 4 0 00-4 4c0 .586.133 1.138.36 1.64L5.5 16.5h2v2l-2.64 2.64c.502.227 1.054.36 1.64.36a4 4 0 004-4c0-.586-.132-1.139-.36-1.64l5.72-5.72a3.98 3.98 0 001.64.36 4 4 0 004-4c0-.586-.132-1.139-.36-1.64z"
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
export class SvgIconSpannerSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-spanner-small',
  template: ` <svg sbbIconSpannerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpannerSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSpannerSmall, IconSpannerSmall],
  exports: [SvgIconSpannerSmall, IconSpannerSmall],
})
export class IconSpannerSmallModule {}

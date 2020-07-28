/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaHk]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M4.541 1.037h2.801L6.161 6.678h5.642l1.179-5.64h2.801L12.862 15h-2.8l1.28-6.12H5.701L4.421 15H1.62zM26.262 1.038l-5.541 5.48h-.04l1.179-5.48h-2.8L16.06 15h2.8l1.52-7.102L24.261 15h3.34l-4.5-7.602 7.061-6.362z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 31px;
        height: 16px;
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
    viewBox: '0 0 31 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaHk {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-hk',
  template: ` <svg sbbIconSaHk></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaHk {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaHk, IconSaHk],
  exports: [SvgIconSaHk, IconSaHk],
})
export class IconSaHkModule {}

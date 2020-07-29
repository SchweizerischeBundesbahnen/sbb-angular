/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaTs]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.259 1.037h11.268l-.482 2.2H9.927L7.273 15H4.22L6.875 3.237H2.757zM23.491 3.718c-.856-.42-1.965-.721-3.03-.721-1.046 0-2.447.4-2.447 1.6 0 2.24 4.976 2.1 4.976 5.982 0 3.42-2.802 4.66-6 4.66-1.4 0-2.843-.32-4.16-.78l.753-2.38c1.13.5 2.32.96 3.574.96 1.4 0 2.78-.68 2.78-2.18 0-2.52-4.974-2.12-4.974-5.841 0-2.941 2.633-4.221 5.434-4.221 1.276 0 2.593.16 3.784.62l-.69 2.3z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 25px;
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
    viewBox: '0 0 25 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaTs {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-ts',
  template: ` <svg sbbIconSaTs></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTs {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaTs, IconSaTs],
  exports: [SvgIconSaTs, IconSaTs],
})
export class IconSaTsModule {}

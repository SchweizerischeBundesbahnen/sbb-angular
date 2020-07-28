/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaGl]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path d="M1 1h14v14H1V1zm1.273 12.727h11.454V2.273H2.273v11.454z" />
      <svg:path d="M2.27 13.72l.335-1.234 9.88-9.881 1.235-.335-.335 1.252-9.88 9.88-1.235.318" />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 16px;
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
    viewBox: '0 0 16 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaGl {}

@Component({
  selector: 'sbb-icon-sa-gl',
  template: ` <svg sbbIconSaGl></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGl {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaGl, IconSaGl],
  exports: [SvgIconSaGl, IconSaGl],
})
export class IconSaGlModule {}

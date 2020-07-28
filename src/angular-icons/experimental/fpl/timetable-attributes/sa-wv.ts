/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaWv]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.14 1.037h2.802l.42 10.702h.04l4.64-10.702h3.76l.062 10.702h.04l4.94-10.702h2.9L16.084 15h-3.501l-.14-11.162h-.04L7.483 15H4.02zM33.083 1.038l-5.802 10.861h-.04L25.942 1.038h-2.8L24.98 15h3.341l7.802-13.963z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 37px;
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
    viewBox: '0 0 37 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaWv {}

@Component({
  selector: 'sbb-icon-sa-wv',
  template: ` <svg sbbIconSaWv></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWv {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaWv, IconSaWv],
  exports: [SvgIconSaWv, IconSaWv],
})
export class IconSaWvModule {}

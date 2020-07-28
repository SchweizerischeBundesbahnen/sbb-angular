/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaSk]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M11.402 3.718c-.82-.42-1.88-.72-2.9-.72-1 0-2.34.4-2.34 1.6 0 2.241 4.76 2.1 4.76 5.981 0 3.421-2.68 4.661-5.742 4.661-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.661-.68 2.661-2.18 0-2.52-4.76-2.12-4.76-5.842 0-2.94 2.52-4.22 5.2-4.22 1.22 0 2.481.16 3.621.62l-.66 2.3zM18.542 1.038l-1.181 5.48h.04l5.542-5.48h3.901l-7.062 6.36L24.283 15h-3.341l-3.88-7.101-1.521 7.1H12.74l3.001-13.961z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 28px;
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
    viewBox: '0 0 28 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaSk {}

@Component({
  selector: 'sbb-icon-sa-sk',
  template: ` <svg sbbIconSaSk></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaSk {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaSk, IconSaSk],
  exports: [SvgIconSaSk, IconSaSk],
})
export class IconSaSkModule {}

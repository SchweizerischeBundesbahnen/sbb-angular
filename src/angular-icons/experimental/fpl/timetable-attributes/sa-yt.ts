/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaYt]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M6.42 9.219L3.14 1.037h2.962l2.08 5.862 4.54-5.862h3.262L9.222 9.219l-1.22 5.78H5.2zM16.5 1.038l-.48 2.2h3.94L17.423 15h2.919l2.54-11.764h3.942l.46-2.2z"
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
export class SvgIconSaYt {}

@Component({
  selector: 'sbb-icon-sa-yt',
  template: ` <svg sbbIconSaYt></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaYt {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaYt, IconSaYt],
  exports: [SvgIconSaYt, IconSaYt],
})
export class IconSaYtModule {}

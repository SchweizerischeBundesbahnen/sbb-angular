/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaGz]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M14.823 3.998c-1.08-.7-2.42-1.001-3.88-1.001C7.54 2.997 5.4 5.658 5.4 8.959c0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.74.62-4.103 0-6.843-1.881-6.843-6.201 0-5.102 3.341-8.242 8.382-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421zM18.4 1.037h9.582l-.48 2.2L19.08 12.8h6.361l-.46 2.2H15.18l.44-2.2 8.402-9.563h-6.1z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 29px;
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
    viewBox: '0 0 29 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaGz {}

@Component({
  selector: 'sbb-icon-sa-gz',
  template: ` <svg sbbIconSaGz></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGz {}

@NgModule({
  declarations: [SvgIconSaGz, IconSaGz],
  exports: [SvgIconSaGz, IconSaGz],
})
export class IconSaGzModule {}

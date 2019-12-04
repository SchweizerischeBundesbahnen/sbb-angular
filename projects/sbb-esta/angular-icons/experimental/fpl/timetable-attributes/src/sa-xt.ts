/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaXt]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M7.42 1.037l2.022 4.801h.04l3.84-4.8h3.3l-5.78 6.66L14.082 15h-3.06l-2.14-5.602h-.04L4.48 15H1l6.46-7.582-3.06-6.38zM17.38 1.038l-.48 2.2h3.94L18.3 15h2.92l2.542-11.764h3.94l.46-2.2z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 29 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaXt {}

@Component({
  selector: 'sbb-icon-sa-xt',
  template: `
    <svg sbbIconSaXt></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaXt {}

@NgModule({
  declarations: [SvgIconSaXt, IconSaXt],
  exports: [SvgIconSaXt, IconSaXt]
})
export class IconSaXtModule {}

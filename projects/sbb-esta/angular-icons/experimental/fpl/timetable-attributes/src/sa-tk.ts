/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaTk]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.002 15h-2.92l2.54-11.763h-3.94zM18.541 1.037l-1.18 5.481h.04l5.541-5.48h3.902l-7.062 6.36L24.283 15h-3.341l-3.88-7.102L15.541 15H12.74l3.001-13.963z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 28 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaTk {}

@Component({
  selector: 'sbb-icon-sa-tk',
  template: `
    <svg sbbIconSaTk></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaTk {}

@NgModule({
  declarations: [SvgIconSaTk, IconSaTk],
  exports: [SvgIconSaTk, IconSaTk]
})
export class IconSaTkModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaTf]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.002 15h-2.92l2.54-11.763h-3.94zM15.68 1.037h7.703l-.48 2.2h-4.881l-.74 3.441h4.66l-.44 2.201h-4.68L15.54 15h-2.8z"
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
export class SvgIconSaTf {}

@Component({
  selector: 'sbb-icon-sa-tf',
  template: ` <svg sbbIconSaTf></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTf {}

@NgModule({
  declarations: [SvgIconSaTf, IconSaTf],
  exports: [SvgIconSaTf, IconSaTf],
})
export class IconSaTfModule {}

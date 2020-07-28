/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaP]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M5.821 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM4.221 15h-2.8L4.38 1.037h2.36c2.581 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.9 5.041h-1.62L4.22 15z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 14px;
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
    viewBox: '0 0 14 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaP {}

@Component({
  selector: 'sbb-icon-sa-p',
  template: ` <svg sbbIconSaP></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaP {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaP, IconSaP],
  exports: [SvgIconSaP, IconSaP],
})
export class IconSaPModule {}

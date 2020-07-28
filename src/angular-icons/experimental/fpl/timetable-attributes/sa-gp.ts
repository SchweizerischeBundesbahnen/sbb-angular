/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaGp]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M14.823 3.998c-1.08-.7-2.42-1.001-3.88-1.001C7.54 2.997 5.4 5.658 5.4 8.959c0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.74.62-4.103 0-6.843-1.881-6.843-6.201 0-5.102 3.341-8.242 8.382-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421zM20.26 7.498h1c1.54 0 3.122-.8 3.122-2.54 0-1.421-1.141-1.721-2.341-1.721h-.88l-.9 4.261zM18.66 15h-2.8l2.96-13.963h2.36c2.582 0 6.122.14 6.122 3.621 0 3.38-2.78 5.041-5.901 5.041h-1.62L18.66 15z"
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
export class SvgIconSaGp {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-gp',
  template: ` <svg sbbIconSaGp></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGp {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaGp, IconSaGp],
  exports: [SvgIconSaGp, IconSaGp],
})
export class IconSaGpModule {}

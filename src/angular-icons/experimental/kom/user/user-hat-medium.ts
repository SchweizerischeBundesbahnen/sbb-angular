/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconUserHatMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.375 15.75h3.75l-1.875-3.375-1.875 3.375zm1.875-3.375V7.5m0 0L18 5.25l6.75 2.25L18 9.742 11.25 7.5zm3 .976v3.149c1.92 1.77 5.038 2.232 7.5 0V8.469m-7.304 3.31c-.594.894-.945 2.016-.945 3.22 0 2.864 1.981 5.25 4.486 5.25 2.507 0 4.514-2.386 4.514-5.25 0-1.19-.348-2.296-.932-3.184m-6.366 7.305c-4.08 1.488-6.953 5.844-6.953 11.622l19.5.007c0-5.298-2.725-10.032-6.954-11.646"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserHatMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-user-hat-medium',
  template: ` <svg sbbIconUserHatMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserHatMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconUserHatMedium, IconUserHatMedium],
  exports: [SvgIconUserHatMedium, IconUserHatMedium],
})
export class IconUserHatMediumModule {}

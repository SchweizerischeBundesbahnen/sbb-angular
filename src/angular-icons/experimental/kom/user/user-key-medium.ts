/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserKeyMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.75 9c0 2.871-1.908 5.25-4.5 5.25S9.75 11.871 9.75 9s1.908-5.25 4.5-5.25 4.5 2.379 4.5 5.25zm-7.375 4.072c-4.04 2.991-5.98 7.254-6.124 13.178H15m2.07-13.141c1.867 1.29 3.168 2.808 4.045 4.495m8.134 5.646c0 2.508-1.992 4.5-4.5 4.5a4.471 4.471 0 01-4.5-4.5c0-2.508 1.992-4.5 4.5-4.5s4.5 1.992 4.5 4.5zm-3-.002c0 .843-.651 1.502-1.497 1.502a1.484 1.484 0 01-1.503-1.502c0-.843.657-1.498 1.503-1.498.846 0 1.497.655 1.497 1.498zm-5.918.964l-4.582 4.662v3.375h3.375l4.563-4.5"
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
export class SvgIconUserKeyMedium {}

@Component({
  selector: 'sbb-icon-user-key-medium',
  template: ` <svg sbbIconUserKeyMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserKeyMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconUserKeyMedium, IconUserKeyMedium],
  exports: [SvgIconUserKeyMedium, IconUserKeyMedium],
})
export class IconUserKeyMediumModule {}

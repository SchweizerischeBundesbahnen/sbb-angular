/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEyeDisabledMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.627 15.127c-.588.843-.877 1.767-.877 2.874 0 2.9 2.35 5.249 5.25 5.249a4.963 4.963 0 002.872-.878m2.2-3.087c.104-.414.178-.84.178-1.284 0-2.901-2.35-5.25-5.25-5.25a5.25 5.25 0 00-1.284.176M6 7.5L28.5 30m-2.014-7.366a25.955 25.955 0 004.264-4.633C29.634 16.35 24.375 9.75 18 9.75c-1.291 0-2.526.271-3.691.708m-3.475 1.875C8.017 14.338 5.991 16.947 5.25 18c1.116 1.65 6.375 8.25 12.75 8.25 1.91 0 3.699-.582 5.308-1.442"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconEyeDisabledMedium {}

@Component({
  selector: 'sbb-icon-eye-disabled-medium',
  template: ` <svg sbbIconEyeDisabledMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeDisabledMedium {}

@NgModule({
  declarations: [SvgIconEyeDisabledMedium, IconEyeDisabledMedium],
  exports: [SvgIconEyeDisabledMedium, IconEyeDisabledMedium],
})
export class IconEyeDisabledMediumModule {}

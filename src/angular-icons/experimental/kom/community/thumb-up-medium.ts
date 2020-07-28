/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconThumbUpMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24 18.75h2.25M8.248 27.764h4.502V15.752H8.248v12.011zM24 21.75h2.25M24 24.75h.75m1.5-9a1.5 1.5 0 110 3 1.5 1.5 0 110 3 1.5 1.5 0 110 3h-1.5a1.5 1.5 0 010 3h-7.5c-2.262 0-4.5-.75-4.5-4.5v-7.5h1.5l6.435-7.058A1.502 1.502 0 0123.25 9.75c0 .183-.032.359-.093.52L21 15.75h5.25"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconThumbUpMedium {}

@Component({
  selector: 'sbb-icon-thumb-up-medium',
  template: ` <svg sbbIconThumbUpMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThumbUpMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconThumbUpMedium, IconThumbUpMedium],
  exports: [SvgIconThumbUpMedium, IconThumbUpMedium],
})
export class IconThumbUpMediumModule {}

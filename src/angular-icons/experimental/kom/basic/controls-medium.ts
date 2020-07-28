/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconControlsMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15.75 9.75c0 1.748-1.252 3-3 3s-3-1.252-3-3c0-1.747 1.252-3 3-3s3 1.253 3 3zm10.5 9c0 1.695-1.303 3-3 3s-3-1.305-3-3c0-1.696 1.303-3 3-3s3 1.304 3 3zm-10.5 9c0 1.722-1.278 3-3 3s-3-1.278-3-3c0-1.72 1.278-3 3-3s3 1.28 3 3zm-6-18H3h6.75zm6 0H33 15.75zm10.5 9H33h-6.75zm-6 0H3h17.25zm-10.5 9H3h6.75zm6 0H33 15.75z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconControlsMedium {}

@Component({
  selector: 'sbb-icon-controls-medium',
  template: ` <svg sbbIconControlsMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconControlsMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconControlsMedium, IconControlsMedium],
  exports: [SvgIconControlsMedium, IconControlsMedium],
})
export class IconControlsMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWarningLightMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.75 7.5V3v4.5zM13.5 9l-3-3 3 3zM24 9l3-3-3 3zM12.75 26.25v-9a6 6 0 0112 0v9h-12zm3-2.25v-7.5V24zm13.5 6.75h-21l1.5-4.5h18l1.5 4.5z"
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
export class SvgIconWarningLightMedium {}

@Component({
  selector: 'sbb-icon-warning-light-medium',
  template: ` <svg sbbIconWarningLightMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWarningLightMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWarningLightMedium, IconWarningLightMedium],
  exports: [SvgIconWarningLightMedium, IconWarningLightMedium],
})
export class IconWarningLightMediumModule {}

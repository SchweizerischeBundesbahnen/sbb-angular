/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFaceSadMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24.83 23.25c-1.144-2.654-3.722-4.5-6.83-4.5-3.107 0-5.687 1.846-6.83 4.5M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zM13.5 12.75a.75.75 0 100 1.5.75.75 0 000-1.5m9 0a.75.75 0 100 1.5.75.75 0 000-1.5"
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
export class SvgIconFaceSadMedium {}

@Component({
  selector: 'sbb-icon-face-sad-medium',
  template: ` <svg sbbIconFaceSadMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFaceSadMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconFaceSadMedium, IconFaceSadMedium],
  exports: [SvgIconFaceSadMedium, IconFaceSadMedium],
})
export class IconFaceSadMediumModule {}

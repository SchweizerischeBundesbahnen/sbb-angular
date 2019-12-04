/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCameraMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.75 29.25h28.5v-18H3.75v18zm19.5-9a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0zm-.006-9l-1.494-4.5h-7.5l-1.5 4.5m-9 0v-1.5h3v1.5"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCameraMedium {}

@Component({
  selector: 'sbb-icon-camera-medium',
  template: `
    <svg sbbIconCameraMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCameraMedium {}

@NgModule({
  declarations: [SvgIconCameraMedium, IconCameraMedium],
  exports: [SvgIconCameraMedium, IconCameraMedium]
})
export class IconCameraMediumModule {}

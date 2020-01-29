/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconGpsMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 18.75a10.48 10.48 0 01-10.5 10.5 10.48 10.48 0 01-10.5-10.5c0-5.815 4.684-10.5 10.5-10.5s10.5 4.685 10.5 10.5zm-4.5 0a6.001 6.001 0 01-12 0 6 6 0 0112 0zm-16.494 0H4.5m24.756-.006h3.742M18.756 29.25V33m0-24.75V4.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconGpsMedium {}

@Component({
  selector: 'sbb-icon-gps-medium',
  template: `
    <svg sbbIconGpsMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconGpsMedium {}

@NgModule({
  declarations: [SvgIconGpsMedium, IconGpsMedium],
  exports: [SvgIconGpsMedium, IconGpsMedium]
})
export class IconGpsMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBicycleLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14 22.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm20.001 0a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zM14 30l4.5-11.5h10l4.5-6h-7M34.001 30L28.5 18.5m-13.5-4h5"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconBicycleLarge {}

@Component({
  selector: 'sbb-icon-bicycle-large',
  template: `
    <svg sbbIconBicycleLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBicycleLarge {}

@NgModule({
  declarations: [SvgIconBicycleLarge, IconBicycleLarge],
  exports: [SvgIconBicycleLarge, IconBicycleLarge]
})
export class IconBicycleLargeModule {}
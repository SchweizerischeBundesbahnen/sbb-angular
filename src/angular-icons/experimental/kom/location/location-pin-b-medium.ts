/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLocationPinBMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M16.248 16.105v3.7h2.497c.863 0 1.444-.084 1.742-.253.509-.286.764-.808.764-1.566 0-.852-.344-1.422-1.03-1.708-.267-.115-.828-.172-1.683-.172h-2.29zm0-4.389v3.269H18.5c.617 0 1.072-.045 1.366-.136.293-.097.528-.281.702-.554.174-.273.262-.591.262-.956 0-.363-.076-.675-.227-.933a1.255 1.255 0 00-.635-.553c-.228-.091-.677-.136-1.346-.136h-2.374zm-1.25-1.205h3.806c.923 0 1.598.117 2.019.35.389.216.696.528.922.938.227.41.341.857.341 1.34 0 .513-.124.967-.372 1.365-.249.397-.591.69-1.026.876.353.104.627.232.822.38.663.499.996 1.225.996 2.177 0 1.25-.465 2.146-1.392 2.694-.435.253-1.01.381-1.72.381h-4.395V10.51z"
      />
      <svg:path
        stroke="#000"
        d="M26.25 15.012a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.149 3.727l7.125 11.249 7.125-11.248c.665-1.166 1.089-2.378 1.101-3.728z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLocationPinBMedium {}

@Component({
  selector: 'sbb-icon-location-pin-b-medium',
  template: ` <svg sbbIconLocationPinBMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinBMedium {}

@NgModule({
  declarations: [SvgIconLocationPinBMedium, IconLocationPinBMedium],
  exports: [SvgIconLocationPinBMedium, IconLocationPinBMedium],
})
export class IconLocationPinBMediumModule {}

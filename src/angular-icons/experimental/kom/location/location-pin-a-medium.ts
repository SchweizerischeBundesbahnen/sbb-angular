/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLocationPinAMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M26.25 15.003a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.148 3.728l7.125 11.248 7.126-11.248c.665-1.166 1.087-2.378 1.101-3.728z"
      />
      <svg:path
        fill="#000"
        d="M19.764 15.176l-1.79-4.825-1.797 4.825h3.587zm-.98-6.178l4.092 10.51H21.34l-1.167-3.214h-4.395l-1.196 3.214h-1.46l4.11-10.51h1.553z"
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
export class SvgIconLocationPinAMedium {}

@Component({
  selector: 'sbb-icon-location-pin-a-medium',
  template: ` <svg sbbIconLocationPinAMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinAMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLocationPinAMedium, IconLocationPinAMedium],
  exports: [SvgIconLocationPinAMedium, IconLocationPinAMedium],
})
export class IconLocationPinAMediumModule {}

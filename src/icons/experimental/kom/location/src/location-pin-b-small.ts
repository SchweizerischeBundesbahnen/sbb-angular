/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLocationPinBSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M10.832 10.737v2.466h1.665c.575 0 .962-.056 1.161-.168.339-.191.509-.539.509-1.044 0-.568-.229-.948-.686-1.139-.178-.077-.552-.115-1.122-.115h-1.527zm0-2.926V9.99h1.501c.412 0 .715-.03.911-.091a.863.863 0 00.468-.369 1.16 1.16 0 00.175-.637c0-.242-.051-.45-.152-.622a.837.837 0 00-.423-.369c-.152-.061-.451-.091-.897-.091h-1.583zm-.833-.804h2.537c.615 0 1.065.078 1.346.234.259.144.464.352.615.625.151.273.227.571.227.893 0 .342-.083.645-.248.91-.166.265-.394.46-.684.584.235.07.418.155.548.254.442.332.664.816.664 1.451 0 .833-.31 1.431-.928 1.796-.29.169-.673.254-1.147.254h-2.93V7.007z"
      />
      <svg:path
        stroke="#000"
        d="M17.5 10.008a5.5 5.5 0 00-11 0c.037.943.316 1.736.766 2.485l4.75 7.499 4.75-7.499c.443-.777.726-1.585.734-2.485z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLocationPinBSmall {}

@Component({
  selector: 'sbb-icon-location-pin-b-small',
  template: `
    <svg sbbIconLocationPinBSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLocationPinBSmall {}

@NgModule({
  declarations: [SvgIconLocationPinBSmall, IconLocationPinBSmall],
  exports: [SvgIconLocationPinBSmall, IconLocationPinBSmall]
})
export class IconLocationPinBSmallModule {}
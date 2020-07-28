/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTelephoneReceiverMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.964 22.484c3.86 6.684 9.502 10.752 13.029 9.56.126-.025.249-.06.363-.128l2.553-1.473c.781-.45.996-1.553.478-2.45l-2.634-4.563c-.517-.897-1.58-1.26-2.36-.81l-2.96 1.709c-.297.172-.695.087-.948-.212a29.175 29.175 0 01-2.982-4.255 29.161 29.161 0 01-2.195-4.71c-.132-.368-.006-.756.29-.926l2.96-1.711c.782-.45.998-1.553.48-2.448l-2.635-4.563c-.517-.896-1.58-1.262-2.36-.81L9.49 6.168a1.143 1.143 0 00-.29.25c-2.797 2.46-2.095 9.379 1.765 16.066z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTelephoneReceiverMedium {}

@Component({
  selector: 'sbb-icon-telephone-receiver-medium',
  template: ` <svg sbbIconTelephoneReceiverMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTelephoneReceiverMedium {}

@NgModule({
  declarations: [SvgIconTelephoneReceiverMedium, IconTelephoneReceiverMedium],
  exports: [SvgIconTelephoneReceiverMedium, IconTelephoneReceiverMedium],
})
export class IconTelephoneReceiverMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWalletMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.25 8.25h25.5v19.5H5.25V8.25zm25.5 6H19.5c-4.993 0-4.993 7.5 0 7.5h11.25M20.25 18a.75.75 0 11-1.5-.001.75.75 0 011.5 0z"
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
export class SvgIconWalletMedium {}

@Component({
  selector: 'sbb-icon-wallet-medium',
  template: ` <svg sbbIconWalletMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWalletMedium {}

@NgModule({
  declarations: [SvgIconWalletMedium, IconWalletMedium],
  exports: [SvgIconWalletMedium, IconWalletMedium],
})
export class IconWalletMediumModule {}

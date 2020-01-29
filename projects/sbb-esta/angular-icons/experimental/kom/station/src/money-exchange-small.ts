/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMoneyExchangeSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M2.5 12c.01-5.262 4.385-9.51 9.829-9.5 3.827.007 7.294 2.09 8.908 5.443.106.222.194.452.263.686M21.5 4v4.5H17m4.5 3.5c-.021 5.268-4.361 9.52-9.792 9.5-3.79-.014-7.327-2.192-8.946-5.516a4.704 4.704 0 01-.262-.686M2.5 20v-4.5H7"
      />
      <svg:path
        fill="#000"
        d="M9.14 12.431v-.323c0-.068.003-.227.013-.478l.007-.048H8.045l.363-.835h.847c.078-.453.19-.878.335-1.273.606-1.657 1.714-2.485 3.322-2.485 1.135 0 2.166.357 3.09 1.071l-.485 1.091a21.62 21.62 0 00-.95-.599c-.548-.31-1.106-.465-1.675-.465-1.044 0-1.766.608-2.167 1.825a5.36 5.36 0 00-.212.835h4.293l-.376.835h-4.033c-.009.247-.014.434-.014.56 0 .062.003.16.007.29h3.67l-.375.834h-3.199c.082.463.218.894.41 1.294.232.472.51.81.834 1.017.337.215.741.323 1.21.323.388 0 .732-.054 1.032-.16.301-.11.815-.36 1.545-.756v1.341c-.205.116-.33.186-.377.21-.669.331-1.435.497-2.296.497-2.028 0-3.238-1.255-3.63-3.766H8.045l.363-.835h.731z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconMoneyExchangeSmall {}

@Component({
  selector: 'sbb-icon-money-exchange-small',
  template: `
    <svg sbbIconMoneyExchangeSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMoneyExchangeSmall {}

@NgModule({
  declarations: [SvgIconMoneyExchangeSmall, IconMoneyExchangeSmall],
  exports: [SvgIconMoneyExchangeSmall, IconMoneyExchangeSmall]
})
export class IconMoneyExchangeSmallModule {}

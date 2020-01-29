/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketDisabledMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M4.5 4.5l27 27m-2.25-2.25H3.75v-21h4.5m24 18.75v-3.75c-2.524 0-4.5-1.976-4.5-4.5 0-2.523 1.976-4.5 4.5-4.5v-6H13.5"
      />
      <svg:path stroke-dasharray="1 1" d="M24.75 19.5V9.026m0 19.474v-3" />
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTicketDisabledMedium {}

@Component({
  selector: 'sbb-icon-ticket-disabled-medium',
  template: `
    <svg sbbIconTicketDisabledMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketDisabledMedium {}

@NgModule({
  declarations: [SvgIconTicketDisabledMedium, IconTicketDisabledMedium],
  exports: [SvgIconTicketDisabledMedium, IconTicketDisabledMedium]
})
export class IconTicketDisabledMediumModule {}

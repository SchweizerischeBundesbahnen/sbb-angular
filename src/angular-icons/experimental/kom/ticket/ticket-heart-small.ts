/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketHeartSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M18.5 11.5c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3zm-5.133-2.411c-.31-.93-1.127-1.588-2.094-1.588-.736 0-1.378.386-1.782.978-.405-.592-1.048-.978-1.784-.978-1.237 0-2.23 1.077-2.23 2.423a2.602 2.602 0 00.621 1.694l3.392 3.69 3.387-3.685c.08-.106.27-.373.333-.492.185-.355.291-.767.291-1.207 0-.294-.047-.575-.134-.835z"
      />
      <svg:path stroke-dasharray="1 1" d="M16.5 18V5" />
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTicketHeartSmall {}

@Component({
  selector: 'sbb-icon-ticket-heart-small',
  template: ` <svg sbbIconTicketHeartSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketHeartSmall {}

@NgModule({
  declarations: [SvgIconTicketHeartSmall, IconTicketHeartSmall],
  exports: [SvgIconTicketHeartSmall, IconTicketHeartSmall],
})
export class IconTicketHeartSmallModule {}

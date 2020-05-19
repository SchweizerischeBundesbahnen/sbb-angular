/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketRouteMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zM15.1 15.249l-3.2 4.002m4.6-8a2.25 2.25 0 110 4.499 2.25 2.25 0 010-4.5zm-6 7.499a2.25 2.25 0 11-.002 4.501 2.25 2.25 0 01.002-4.501z"
      />
      <svg:path stroke-dasharray="1 1" d="M24.75 27V7.5" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTicketRouteMedium {}

@Component({
  selector: 'sbb-icon-ticket-route-medium',
  template: ` <svg sbbIconTicketRouteMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketRouteMedium {}

@NgModule({
  declarations: [SvgIconTicketRouteMedium, IconTicketRouteMedium],
  exports: [SvgIconTicketRouteMedium, IconTicketRouteMedium],
})
export class IconTicketRouteMediumModule {}

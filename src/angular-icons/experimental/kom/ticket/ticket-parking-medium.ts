/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketParkingMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M3.75 11.25h8.264L15 15.762h3a2.249 2.249 0 012.25 2.25V18v3.75h-3m-4.5 0h-6m10.5-.75A2.249 2.249 0 0115 23.25a2.249 2.249 0 110-4.5A2.25 2.25 0 0117.25 21zM9 14.243h1.506L12 16.5m-8.25 2.388c.236-.084.486-.138.75-.138a2.25 2.25 0 110 4.5c-.264 0-.514-.054-.75-.138m24-5.862c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5z"
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
export class SvgIconTicketParkingMedium {}

@Component({
  selector: 'sbb-icon-ticket-parking-medium',
  template: ` <svg sbbIconTicketParkingMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketParkingMedium {}

@NgModule({
  declarations: [SvgIconTicketParkingMedium, IconTicketParkingMedium],
  exports: [SvgIconTicketParkingMedium, IconTicketParkingMedium],
})
export class IconTicketParkingMediumModule {}

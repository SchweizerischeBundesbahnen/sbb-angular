/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconTicketParkingSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M2.5 7.5h5.509L10 10.508h2a1.5 1.5 0 011.5 1.5V12v2.5h-2m-3 0h-4m7-.5A1.5 1.5 0 118.501 14 1.5 1.5 0 0111.5 14zM6 9.495h1.004L8 11m-5.5 1.592c.157-.056.324-.092.5-.092a1.5 1.5 0 110 3c-.176 0-.343-.036-.5-.092m16-3.908c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3z"
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
export class SvgIconTicketParkingSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-parking-small',
  template: ` <svg sbbIconTicketParkingSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketParkingSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTicketParkingSmall, IconTicketParkingSmall],
  exports: [SvgIconTicketParkingSmall, IconTicketParkingSmall],
})
export class IconTicketParkingSmallModule {}

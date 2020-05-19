/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketRouteSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M18.5 11.5c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3zm-8.433-1.334l-2.134 2.668M11 7.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 5a1.5 1.5 0 11-.001 3 1.5 1.5 0 01.001-3z"
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
export class SvgIconTicketRouteSmall {}

@Component({
  selector: 'sbb-icon-ticket-route-small',
  template: ` <svg sbbIconTicketRouteSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketRouteSmall {}

@NgModule({
  declarations: [SvgIconTicketRouteSmall, IconTicketRouteSmall],
  exports: [SvgIconTicketRouteSmall, IconTicketRouteSmall],
})
export class IconTicketRouteSmallModule {}

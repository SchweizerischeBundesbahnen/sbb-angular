/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBusStopSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M7.499 4.5h14v-2h-14v2zm1.001.001v17.5m12.001-17.5v17.5M2.5 12.5h4v-5h-4v5zm2 0V22m12-13.5a1 1 0 11-2 0 1 1 0 012 0zm1 8v-5h-4v5h1v5h2v-5h1z"
    />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBusStopSmall {}

@Component({
  selector: 'sbb-icon-bus-stop-small',
  template: ` <svg sbbIconBusStopSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusStopSmall {}

@NgModule({
  declarations: [SvgIconBusStopSmall, IconBusStopSmall],
  exports: [SvgIconBusStopSmall, IconBusStopSmall],
})
export class IconBusStopSmallModule {}

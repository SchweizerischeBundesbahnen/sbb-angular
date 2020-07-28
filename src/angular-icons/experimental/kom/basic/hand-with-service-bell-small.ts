/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHandWithServiceBellSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M2 11.5h19M8.861 17.028L4.126 13.72a1 1 0 10-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2m7.5-6c0-4.103-3.842-6-8-6-4.158 0-8 1.897-8 6m9-7a1 1 0 11-2 0 1 1 0 012 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHandWithServiceBellSmall {}

@Component({
  selector: 'sbb-icon-hand-with-service-bell-small',
  template: ` <svg sbbIconHandWithServiceBellSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandWithServiceBellSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconHandWithServiceBellSmall, IconHandWithServiceBellSmall],
  exports: [SvgIconHandWithServiceBellSmall, IconHandWithServiceBellSmall],
})
export class IconHandWithServiceBellSmallModule {}

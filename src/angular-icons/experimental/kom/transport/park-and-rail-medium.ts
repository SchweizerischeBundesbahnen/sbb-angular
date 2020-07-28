/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconParkAndRailMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M4.502 27.751h27.002H4.502zm0-19.5h27.002H4.502z" />
      <svg:path
        fill="#000"
        d="M4.484 11.996h4.844c.816 0 1.458.051 1.926.153.468.1.89.28 1.267.537 1.046.7 1.57 1.756 1.57 3.17 0 1.252-.433 2.237-1.298 2.954a3.358 3.358 0 01-1.256.662c-.47.133-1.051.2-1.741.2H7.103v4.325H4.484V11.996zm2.62 2.217v3.399h2.34c.694 0 1.195-.123 1.502-.369.377-.308.566-.758.566-1.355 0-.603-.22-1.051-.657-1.347-.317-.219-.834-.328-1.551-.328h-2.2zm7.015 3.944h2.313v-2.313h1.326v2.313h2.322v1.325h-2.322v2.313h-1.326v-2.313h-2.313v-1.325zm6.912-6.16h5.812c1.15 0 2.03.181 2.643.541.509.296.897.69 1.166 1.182.268.494.403 1.049.403 1.667 0 .702-.17 1.31-.505 1.831-.338.52-.807.893-1.409 1.116.531.13.947.428 1.248.887.192.29.32.594.386.912.066.316.151 1.04.255 2.175.076.83.195 1.348.352 1.55l.114.14h-2.733a2.048 2.048 0 01-.2-.65c-.041-.26-.095-.87-.16-1.822-.066-.847-.273-1.435-.62-1.76-.349-.325-.94-.488-1.778-.488H23.65v4.72h-2.62V11.997zm2.619 2.06v3.3h2.503c.804 0 1.371-.115 1.7-.344.415-.29.624-.728.624-1.314 0-.569-.177-.986-.534-1.247-.356-.264-.917-.394-1.683-.394h-2.61z"
      />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconParkAndRailMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-park-and-rail-medium',
  template: ` <svg sbbIconParkAndRailMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconParkAndRailMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconParkAndRailMedium, IconParkAndRailMedium],
  exports: [SvgIconParkAndRailMedium, IconParkAndRailMedium],
})
export class IconParkAndRailMediumModule {}

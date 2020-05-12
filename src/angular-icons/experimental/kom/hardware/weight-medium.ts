/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWeightMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M8.25 11.25h19.5l3 19.5H5.25l3-19.5zm12.75-3a3.001 3.001 0 01-6 0 3 3 0 016 0z"
      />
      <svg:path
        fill="#000"
        d="M17.751 18.016l-3.357 3.387 3.673 5.18h-2.36l-2.602-3.845-1.078 1.078v2.766h-1.869v-8.566h1.869v3.544l3.357-3.544h2.367zm8.191 3.949v4.617h-1.195l-.188-.978c-.633.787-1.486 1.183-2.56 1.183-1.308 0-2.342-.483-3.1-1.453-.628-.809-.943-1.808-.943-2.994 0-1.347.41-2.451 1.23-3.31.77-.814 1.764-1.22 2.982-1.22 1.125 0 2.042.364 2.748 1.09.528.548.831 1.191.91 1.934h-1.811c-.095-.462-.303-.82-.63-1.079-.327-.258-.74-.385-1.24-.385-.757 0-1.343.292-1.757.877-.363.512-.545 1.203-.545 2.075 0 .852.17 1.527.509 2.028.418.612 1.036.92 1.852.92.59 0 1.074-.18 1.45-.533.377-.357.575-.824.595-1.401h-1.904v-1.371h3.597z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWeightMedium {}

@Component({
  selector: 'sbb-icon-weight-medium',
  template: ` <svg sbbIconWeightMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWeightMedium {}

@NgModule({
  declarations: [SvgIconWeightMedium, IconWeightMedium],
  exports: [SvgIconWeightMedium, IconWeightMedium],
})
export class IconWeightMediumModule {}

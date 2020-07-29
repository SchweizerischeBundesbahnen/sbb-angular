/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconEscalatorSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.498 5.5a1 1 0 11-2.001 0 1 1 0 012 0zM19 5.5h-3c-.721 0-1.406.311-1.881.854L7.865 13.5H5A2.503 2.503 0 002.5 16c0 1.378 1.122 2.5 2.5 2.5h4c.721 0 1.407-.31 1.881-.854l6.253-7.146H19c1.379 0 2.5-1.122 2.5-2.5S20.379 5.5 19 5.5zm-11.502 8v-5h2v3.134"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconEscalatorSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-escalator-small',
  template: ` <svg sbbIconEscalatorSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEscalatorSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconEscalatorSmall, IconEscalatorSmall],
  exports: [SvgIconEscalatorSmall, IconEscalatorSmall],
})
export class IconEscalatorSmallModule {}

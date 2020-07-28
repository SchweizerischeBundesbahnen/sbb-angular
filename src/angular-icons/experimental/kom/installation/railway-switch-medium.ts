/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconRailwaySwitchMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.25 27.75v-4.5h.003-.003v4.5H6h2.25zm0 0v2.852-2.852h.003-.003zm7.5-13.5v2.784-2.784h1.827-1.827v-4.5H18h-2.25V6v3.75H10.5h5.25v4.5H10.5h5.25zm-7.5 9H6h2.25V6v17.25zM6 9.75h2.25H6zm0 4.5h2.25H6zm4.5 4.492h4.12-4.12zM6 18.75h2.25H6zm14.528-9H19.5h1.03zM10.5 23.242h1.164H10.5zm4.5.008h7.5H15zm3-4.5h7.5H18zm3-4.5h7.5H21zm3-4.5h7.5H24zm-12 18h7.5H12zm3.75 0V30.6 27.75zm6.75-21L8.247 28.443M31.5 6.75L15.745 29.172"
    />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-installation',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconRailwaySwitchMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-railway-switch-medium',
  template: ` <svg sbbIconRailwaySwitchMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRailwaySwitchMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconRailwaySwitchMedium, IconRailwaySwitchMedium],
  exports: [SvgIconRailwaySwitchMedium, IconRailwaySwitchMedium],
})
export class IconRailwaySwitchMediumModule {}

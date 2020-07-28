/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSunriseMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.95 22.5c-.78-1.012-1.2-2.366-1.2-3.75 0-3.325 2.674-6 6-6 3.327 0 6 2.675 6 6 0 1.419-.533 2.72-1.35 3.745M6 18.75h4.5m-.843-9.226l3.402 3.387M18.75 6v4.5m9.23-.836L24.58 13.04m6.919 5.71H27m-19.5 6h20.99"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSunriseMedium {}

@Component({
  selector: 'sbb-icon-sunrise-medium',
  template: ` <svg sbbIconSunriseMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunriseMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSunriseMedium, IconSunriseMedium],
  exports: [SvgIconSunriseMedium, IconSunriseMedium],
})
export class IconSunriseMediumModule {}

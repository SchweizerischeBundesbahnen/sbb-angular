/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconRocketLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24.51 8.844c-12.832 14.5-6 30.37-6 30.37s6-5.52 12 0c0 0 6.834-15.87-6-30.37zM24.5 32v8m6.81-3.236c1.305.304 2.682.989 4.058 2.256 0 0 1.06-4.931-3.19-7.065M27.5 22.5a3 3 0 11-6 0 3 3 0 016 0zm-9.794 14.25c-1.32.297-2.718.984-4.115 2.27 0 0-1.072-4.977 3.25-7.094m4.133-18.302c.958.473 3.997 1.696 7.08.01"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconRocketLarge {}

@Component({
  selector: 'sbb-icon-rocket-large',
  template: `
    <svg sbbIconRocketLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconRocketLarge {}

@NgModule({
  declarations: [SvgIconRocketLarge, IconRocketLarge],
  exports: [SvgIconRocketLarge, IconRocketLarge]
})
export class IconRocketLargeModule {}
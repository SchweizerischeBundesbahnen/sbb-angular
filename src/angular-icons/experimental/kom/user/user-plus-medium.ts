/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserPlusMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.626 17.546c-4.41 1.59-6.876 6.829-6.876 11.704H21M25.5 24c-1.095-2.95-3.315-5.448-6.132-6.455M27.75 25.5V33M24 29.25h7.5m-15-21c2.485 0 4.5 2.35 4.5 5.25s-2.015 5.25-4.5 5.25c-2.486 0-4.5-2.35-4.5-5.25s2.014-5.25 4.5-5.25z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserPlusMedium {}

@Component({
  selector: 'sbb-icon-user-plus-medium',
  template: ` <svg sbbIconUserPlusMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserPlusMedium {}

@NgModule({
  declarations: [SvgIconUserPlusMedium, IconUserPlusMedium],
  exports: [SvgIconUserPlusMedium, IconUserPlusMedium],
})
export class IconUserPlusMediumModule {}

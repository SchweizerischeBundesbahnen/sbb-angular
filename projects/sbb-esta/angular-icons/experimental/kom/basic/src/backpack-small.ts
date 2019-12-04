/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBackpackSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.5 9A4.5 4.5 0 0110 4.5h4A4.5 4.5 0 0118.5 9v12.5h-13V9zm9.006-4.5L14.5 4A1.5 1.5 0 0013 2.5h-1.996a1.5 1.5 0 00-1.5 1.5l-.004.5M7.504 15a1.5 1.5 0 011.5-1.5H15a1.5 1.5 0 011.5 1.5m0 0v4.5h-9V15m1.5.5h6M13.5 17v-1.5"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconBackpackSmall {}

@Component({
  selector: 'sbb-icon-backpack-small',
  template: `
    <svg sbbIconBackpackSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBackpackSmall {}

@NgModule({
  declarations: [SvgIconBackpackSmall, IconBackpackSmall],
  exports: [SvgIconBackpackSmall, IconBackpackSmall]
})
export class IconBackpackSmallModule {}

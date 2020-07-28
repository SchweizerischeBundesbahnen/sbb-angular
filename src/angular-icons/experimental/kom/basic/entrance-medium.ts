/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEntranceMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M31.515 18.75h-20.25m4.711-4.724l-4.711 4.724 4.711 4.711M23.25 25.5v3.75h-18V6.75h18v3.75"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconEntranceMedium {}

@Component({
  selector: 'sbb-icon-entrance-medium',
  template: ` <svg sbbIconEntranceMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEntranceMedium {}

@NgModule({
  declarations: [SvgIconEntranceMedium, IconEntranceMedium],
  exports: [SvgIconEntranceMedium, IconEntranceMedium],
})
export class IconEntranceMediumModule {}

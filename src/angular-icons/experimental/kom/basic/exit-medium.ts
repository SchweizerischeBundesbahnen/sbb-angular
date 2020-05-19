/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconExitMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.5 18.75h20.25m-4.712 4.724l4.713-4.724-4.713-4.711m-2.788 11.46v3.75h-18V6.75h18v3.75"
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
export class SvgIconExitMedium {}

@Component({
  selector: 'sbb-icon-exit-medium',
  template: ` <svg sbbIconExitMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconExitMedium {}

@NgModule({
  declarations: [SvgIconExitMedium, IconExitMedium],
  exports: [SvgIconExitMedium, IconExitMedium],
})
export class IconExitMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconExclamationPointMedium]',
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M19.357 8.154v6.234l-.696 9.046H17.34l-.67-9.046V8.154h2.687zM16.504 28.5v-2.866h2.993V28.5h-2.993z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconExclamationPointMedium {}

@Component({
  selector: 'sbb-icon-exclamation-point-medium',
  template: `
    <svg sbbIconExclamationPointMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconExclamationPointMedium {}

@NgModule({
  declarations: [SvgIconExclamationPointMedium, IconExclamationPointMedium],
  exports: [SvgIconExclamationPointMedium, IconExclamationPointMedium]
})
export class IconExclamationPointMediumModule {}

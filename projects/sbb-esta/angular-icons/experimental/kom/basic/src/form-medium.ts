/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFormMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M23.25 6.75h6v24H6.75v-24h6m-2.25 6h15m-15 4.5h15m-15 4.5h15m-15 4.5H18m2.25-21s-.063-1.5-2.25-1.5-2.25 1.5-2.25 1.5h-3v3h10.5v-3h-3z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFormMedium {}

@Component({
  selector: 'sbb-icon-form-medium',
  template: `
    <svg sbbIconFormMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFormMedium {}

@NgModule({
  declarations: [SvgIconFormMedium, IconFormMedium],
  exports: [SvgIconFormMedium, IconFormMedium]
})
export class IconFormMediumModule {}

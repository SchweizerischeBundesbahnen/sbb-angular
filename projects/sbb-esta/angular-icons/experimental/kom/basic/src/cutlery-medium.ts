/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCutleryMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M26.25 31.5V14.25 31.5zm0-26.25c1.656 0 3 2.014 3 4.5s-1.344 4.5-3 4.5-3-2.014-3-4.5 1.344-4.5 3-4.5zm-18 26.25V14.25 31.5zm3-27v6.75s0 3-3 3-3-3-3-3V4.5m3 7.5V4.5 12zm7.5 6.75V31.5 5.25h.75c2.1 0 2.25 1.95 2.25 4.5v9h-3z"
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
export class SvgIconCutleryMedium {}

@Component({
  selector: 'sbb-icon-cutlery-medium',
  template: `
    <svg sbbIconCutleryMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCutleryMedium {}

@NgModule({
  declarations: [SvgIconCutleryMedium, IconCutleryMedium],
  exports: [SvgIconCutleryMedium, IconCutleryMedium]
})
export class IconCutleryMediumModule {}

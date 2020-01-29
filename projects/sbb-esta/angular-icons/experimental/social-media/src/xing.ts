/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconXing]',
  template: `
    <svg:path
      d="M14.6 21l-4-7.1L16.8 3H21l-6.2 10.9 4 7.1h-4.2zM8 15.6l3.1-5.1-2.4-4.2h-4L7 10.4l-3 5.2h4zm0 0"
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
    class: 'sbb-icon sbb-icon-social-media',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconXing {}

@Component({
  selector: 'sbb-icon-xing',
  template: `
    <svg sbbIconXing></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconXing {}

@NgModule({
  declarations: [SvgIconXing, IconXing],
  exports: [SvgIconXing, IconXing]
})
export class IconXingModule {}

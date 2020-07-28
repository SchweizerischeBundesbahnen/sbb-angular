/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSuitcaseMedium]',
  template: `
    <svg:path fill="none" stroke="#000" d="M5.25 11.264V30.75h25.5V11.264H5.25zm9 0v-4.5h7.5v4.5" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSuitcaseMedium {}

@Component({
  selector: 'sbb-icon-suitcase-medium',
  template: ` <svg sbbIconSuitcaseMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSuitcaseMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSuitcaseMedium, IconSuitcaseMedium],
  exports: [SvgIconSuitcaseMedium, IconSuitcaseMedium],
})
export class IconSuitcaseMediumModule {}

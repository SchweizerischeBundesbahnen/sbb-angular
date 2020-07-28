/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconGiftMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.25 11.25h25.5v4.5H5.25v-4.5zm24 4.5v16.5H6.75v-16.5m7.5-4.5v21m7.5 0v-21m-3.756 0L18 6c1.124-4.245 6.864-1.762 4.8 1.8l-2.55 3.45M18 6c-1.136-4.269-6.83-1.833-4.8 1.8l2.55 3.45"
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
export class SvgIconGiftMedium {}

@Component({
  selector: 'sbb-icon-gift-medium',
  template: ` <svg sbbIconGiftMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGiftMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconGiftMedium, IconGiftMedium],
  exports: [SvgIconGiftMedium, IconGiftMedium],
})
export class IconGiftMediumModule {}

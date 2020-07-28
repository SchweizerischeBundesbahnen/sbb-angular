/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconPictureMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.75 26.25h28.5M6 26.25L10.5 18l6 5.25L24 15l6 11.25m-19.5-18a2.249 2.249 0 012.25 2.25 2.249 2.249 0 01-2.25 2.25 2.249 2.249 0 01-2.25-2.25 2.249 2.249 0 012.25-2.25zm-6.75 24h28.5V3.75H3.75v28.5z"
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
export class SvgIconPictureMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-picture-medium',
  template: ` <svg sbbIconPictureMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPictureMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconPictureMedium, IconPictureMedium],
  exports: [SvgIconPictureMedium, IconPictureMedium],
})
export class IconPictureMediumModule {}

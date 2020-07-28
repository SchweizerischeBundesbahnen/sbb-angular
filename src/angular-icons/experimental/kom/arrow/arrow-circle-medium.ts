/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowCircleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 7.5v6.75H22.5m6.396 6.748C27.682 25.923 23.475 29.25 18 29.25c-6.524 0-11.25-4.725-11.25-11.25 0-6.524 4.726-11.25 11.25-11.25 5.055 0 9.717 3.186 11.25 7.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconArrowCircleMedium {}

@Component({
  selector: 'sbb-icon-arrow-circle-medium',
  template: ` <svg sbbIconArrowCircleMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowCircleMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconArrowCircleMedium, IconArrowCircleMedium],
  exports: [SvgIconArrowCircleMedium, IconArrowCircleMedium],
})
export class IconArrowCircleMediumModule {}

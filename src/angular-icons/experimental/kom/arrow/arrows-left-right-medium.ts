/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconArrowsLeftRightMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.5 20.248l18.375.002M26.625 15l5.25 5.25-5.25 5.25m-4.128-9.748L4.125 15.75M9.375 21l-5.25-5.25 5.25-5.25"
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
export class SvgIconArrowsLeftRightMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-arrows-left-right-medium',
  template: ` <svg sbbIconArrowsLeftRightMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowsLeftRightMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconArrowsLeftRightMedium, IconArrowsLeftRightMedium],
  exports: [SvgIconArrowsLeftRightMedium, IconArrowsLeftRightMedium],
})
export class IconArrowsLeftRightMediumModule {}

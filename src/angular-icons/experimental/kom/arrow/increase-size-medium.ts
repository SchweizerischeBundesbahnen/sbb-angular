/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconIncreaseSizeMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M30.75 5.249L24 11.999m1.5-6.75h5.25v5.25" />
      <svg:path stroke-dasharray="1 1" d="M3 14.25h18.75V33" />
    </svg:g>
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
export class SvgIconIncreaseSizeMedium {}

@Component({
  selector: 'sbb-icon-increase-size-medium',
  template: ` <svg sbbIconIncreaseSizeMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconIncreaseSizeMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconIncreaseSizeMedium, IconIncreaseSizeMedium],
  exports: [SvgIconIncreaseSizeMedium, IconIncreaseSizeMedium],
})
export class IconIncreaseSizeMediumModule {}

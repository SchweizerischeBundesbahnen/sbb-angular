/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconGlobeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 17.25c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-1.5 6.044h-21m22.5-6h-24m22.5-6h-21m6.554 17.279c-2.28-2.72-3.73-6.78-3.73-11.322 0-4.544 1.45-8.604 3.73-11.324m0 0c-2.28 2.719-3.73 6.78-3.73 11.323s1.45 8.602 3.73 11.323m7.892-22.645c2.28 2.718 3.73 6.78 3.73 11.322 0 4.543-1.45 8.602-3.73 11.323m0 0c2.28-2.72 3.73-6.78 3.73-11.322 0-4.544-1.45-8.604-3.73-11.324M17.25 5.25v24"
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
export class SvgIconGlobeMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-globe-medium',
  template: ` <svg sbbIconGlobeMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGlobeMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconGlobeMedium, IconGlobeMedium],
  exports: [SvgIconGlobeMedium, IconGlobeMedium],
})
export class IconGlobeMediumModule {}

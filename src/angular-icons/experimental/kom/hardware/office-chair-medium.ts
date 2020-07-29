/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconOfficeChairMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.25 24.75h13.5v-3h-13.5v3zm6-3h1.5v-3h-1.5v3zm0 9h1.5v-6h-1.5v6zm-5.25 0h12m-11.25-12h10.5v-12h-10.5v12zM26.25 21v-4.5M9.75 21v-4.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconOfficeChairMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-office-chair-medium',
  template: ` <svg sbbIconOfficeChairMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOfficeChairMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconOfficeChairMedium, IconOfficeChairMedium],
  exports: [SvgIconOfficeChairMedium, IconOfficeChairMedium],
})
export class IconOfficeChairMediumModule {}

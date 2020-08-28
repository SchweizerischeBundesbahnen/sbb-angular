/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLinkMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.901 16.41l-1.06-1.063a4.516 4.516 0 00-6.365 0l-6.363 6.365a4.513 4.513 0 000 6.364l1.06 1.06a4.514 4.514 0 006.364 0l3.72-3.72m-2.658-5.825l1.06 1.06a4.511 4.511 0 006.363 0l6.365-6.364a4.511 4.511 0 000-6.363l-1.06-1.06a4.513 4.513 0 00-6.365 0l-3.711 3.712"
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
export class SvgIconLinkMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-link-medium',
  template: ` <svg sbbIconLinkMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLinkMedium, IconLinkMedium],
  exports: [SvgIconLinkMedium, IconLinkMedium],
})
export class IconLinkMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconInstagram]',
  template: `
    <svg:path
      d="M18.9 3H5.1C3.9 3 3 3.9 3 5.1v13.8c0 1.2.9 2.1 2.1 2.1h13.8c1.1 0 2.1-.9 2.1-2.1V5.1c0-1.2-.9-2.1-2.1-2.1zM12 8.5c1.9 0 3.5 1.5 3.5 3.5 0 1.9-1.5 3.5-3.5 3.5-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5zm6.9 9.7c0 .4-.3.7-.7.7H5.8c-.4 0-.7-.3-.7-.7v-7.6h1.6c-.1.4-.2.9-.2 1.4 0 3.1 2.5 5.5 5.5 5.5 3.1 0 5.5-2.5 5.5-5.5 0-.5-.1-.9-.2-1.4h1.6v7.6zM19 7.9c0 .4-.3.7-.7.7h-2.1c-.4 0-.7-.3-.7-.7V5.8c0-.4.3-.7.7-.7h2.1c.4 0 .7.3.7.7v2.1z"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-social-media',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconInstagram {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-instagram',
  template: ` <svg sbbIconInstagram></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInstagram {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconInstagram, IconInstagram],
  exports: [SvgIconInstagram, IconInstagram],
})
export class IconInstagramModule {}

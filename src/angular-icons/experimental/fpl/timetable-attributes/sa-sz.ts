/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaSz]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M11.402 3.718c-.82-.42-1.88-.721-2.9-.721-1 0-2.34.4-2.34 1.6 0 2.24 4.76 2.1 4.76 5.982 0 3.42-2.68 4.66-5.742 4.66-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.662-.68 2.662-2.18 0-2.52-4.762-2.12-4.762-5.841C3.24 2.077 5.76.797 8.441.797c1.221 0 2.481.16 3.621.62l-.66 2.3zM15.081 1.037h9.582l-.48 2.2-8.422 9.563h6.361l-.46 2.2H11.86l.44-2.2 8.402-9.563h-6.1z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 26px;
        height: 16px;
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
    viewBox: '0 0 26 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaSz {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-sz',
  template: ` <svg sbbIconSaSz></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaSz {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaSz, IconSaSz],
  exports: [SvgIconSaSz, IconSaSz],
})
export class IconSaSzModule {}

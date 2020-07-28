/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaKb]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M7.421 1.038l-1.18 5.48h.04l5.541-5.48h3.901l-7.062 6.36L13.162 15h-3.34l-3.88-7.101-1.52 7.1H1.62l3-13.961zM19.182 6.679h1.1c1.42 0 2.96-.4 2.96-2.041 0-1.34-1.28-1.4-2.34-1.4h-.98l-.74 3.44zm-1.28 6.12h.96c1.72 0 3.64-.2 3.64-2.36 0-1.46-1.36-1.68-2.86-1.68h-.9l-.84 4.04zM17.68 1.039h4.142c2.179 0 4.22.8 4.22 3.34 0 1.7-1.36 3.06-2.98 3.32v.04c1.559.24 2.24 1.44 2.24 2.942 0 4-4.481 4.32-6.561 4.32H14.76l2.92-13.962z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 27px;
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
    viewBox: '0 0 27 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaKb {}

@Component({
  selector: 'sbb-icon-sa-kb',
  template: ` <svg sbbIconSaKb></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaKb {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaKb, IconSaKb],
  exports: [SvgIconSaKb, IconSaKb],
})
export class IconSaKbModule {}

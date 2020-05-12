/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaBs]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M5.84 6.679h1.102c1.42 0 2.96-.4 2.96-2.041 0-1.34-1.28-1.4-2.34-1.4H6.58l-.74 3.44zm-1.28 6.12h.96c1.72 0 3.642-.2 3.642-2.36 0-1.46-1.361-1.68-2.861-1.68h-.9l-.84 4.04zM4.34 1.039h4.142c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.06-2.98 3.32v.04c1.56.24 2.24 1.44 2.24 2.942 0 4-4.48 4.32-6.561 4.32H1.42L4.34 1.038zM23.622 3.718c-.819-.42-1.88-.72-2.9-.72-1 0-2.34.4-2.34 1.6 0 2.241 4.761 2.1 4.761 5.981 0 3.421-2.68 4.661-5.742 4.661-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.34 0 2.661-.68 2.661-2.18 0-2.52-4.76-2.12-4.76-5.842 0-2.94 2.52-4.22 5.2-4.22 1.22 0 2.481.16 3.62.62l-.66 2.3z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 25px;
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
    viewBox: '0 0 25 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaBs {}

@Component({
  selector: 'sbb-icon-sa-bs',
  template: ` <svg sbbIconSaBs></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaBs {}

@NgModule({
  declarations: [SvgIconSaBs, IconSaBs],
  exports: [SvgIconSaBs, IconSaBs],
})
export class IconSaBsModule {}

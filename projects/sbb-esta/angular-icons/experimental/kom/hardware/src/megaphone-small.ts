/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMegaphoneSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.707 13.5l6 6-2 2-3-3-1 1-3-3 3-3zm4.5 1.5c1.415-1.414 1.763-2.17 7.5-1.5l1-1-9-9-1 1c.669 5.737-.085 6.086-1.5 7.5l3 3zm8-11l-3 3m-1.5-5v3m6.5 3.5h-3"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconMegaphoneSmall {}

@Component({
  selector: 'sbb-icon-megaphone-small',
  template: `
    <svg sbbIconMegaphoneSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMegaphoneSmall {}

@NgModule({
  declarations: [SvgIconMegaphoneSmall, IconMegaphoneSmall],
  exports: [SvgIconMegaphoneSmall, IconMegaphoneSmall]
})
export class IconMegaphoneSmallModule {}

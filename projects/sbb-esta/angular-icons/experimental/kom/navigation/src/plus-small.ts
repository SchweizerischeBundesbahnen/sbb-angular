/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPlusSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M11.5 21V4m8.5 8.5H3" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-navigation',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconPlusSmall {}

@Component({
  selector: 'sbb-icon-plus-small',
  template: `
    <svg sbbIconPlusSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPlusSmall {}

@NgModule({
  declarations: [SvgIconPlusSmall, IconPlusSmall],
  exports: [SvgIconPlusSmall, IconPlusSmall]
})
export class IconPlusSmallModule {}

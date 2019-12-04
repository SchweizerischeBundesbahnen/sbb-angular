/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowLongLeftSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M20 12.5H4.51m3.14-3.15L4.51 12.5l3.14 3.14" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconArrowLongLeftSmall {}

@Component({
  selector: 'sbb-icon-arrow-long-left-small',
  template: `
    <svg sbbIconArrowLongLeftSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowLongLeftSmall {}

@NgModule({
  declarations: [SvgIconArrowLongLeftSmall, IconArrowLongLeftSmall],
  exports: [SvgIconArrowLongLeftSmall, IconArrowLongLeftSmall]
})
export class IconArrowLongLeftSmallModule {}

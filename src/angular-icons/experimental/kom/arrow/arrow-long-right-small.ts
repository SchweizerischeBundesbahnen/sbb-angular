/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowLongRightSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M4 12.491h15.49m-3.141 3.15l3.142-3.15-3.142-3.14" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconArrowLongRightSmall {}

@Component({
  selector: 'sbb-icon-arrow-long-right-small',
  template: ` <svg sbbIconArrowLongRightSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowLongRightSmall {}

@NgModule({
  declarations: [SvgIconArrowLongRightSmall, IconArrowLongRightSmall],
  exports: [SvgIconArrowLongRightSmall, IconArrowLongRightSmall],
})
export class IconArrowLongRightSmallModule {}

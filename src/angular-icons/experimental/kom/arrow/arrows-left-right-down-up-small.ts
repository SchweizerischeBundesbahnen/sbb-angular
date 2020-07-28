/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowsLeftRightDownUpSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.5 2.75v17.5m3.852-13.606L11.5 2.75 7.657 6.646m-.008 9.71l3.853 3.893 3.842-3.896M16.75 8l3.5 3.5-3.5 3.5m-10.5 0l-3.5-3.5L6.25 8m14 3.502L2.75 11.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconArrowsLeftRightDownUpSmall {}

@Component({
  selector: 'sbb-icon-arrows-left-right-down-up-small',
  template: ` <svg sbbIconArrowsLeftRightDownUpSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowsLeftRightDownUpSmall {}

@NgModule({
  declarations: [SvgIconArrowsLeftRightDownUpSmall, IconArrowsLeftRightDownUpSmall],
  exports: [SvgIconArrowsLeftRightDownUpSmall, IconArrowsLeftRightDownUpSmall],
})
export class IconArrowsLeftRightDownUpSmallModule {}

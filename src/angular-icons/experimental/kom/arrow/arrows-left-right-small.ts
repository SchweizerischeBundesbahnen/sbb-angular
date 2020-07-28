/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowsLeftRightSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9 13.499h12.25M17.75 10l3.5 3.5-3.5 3.5m-2.752-6.499H2.75M6.25 14l-3.5-3.5L6.25 7"
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
export class SvgIconArrowsLeftRightSmall {}

@Component({
  selector: 'sbb-icon-arrows-left-right-small',
  template: ` <svg sbbIconArrowsLeftRightSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowsLeftRightSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconArrowsLeftRightSmall, IconArrowsLeftRightSmall],
  exports: [SvgIconArrowsLeftRightSmall, IconArrowsLeftRightSmall],
})
export class IconArrowsLeftRightSmallModule {}

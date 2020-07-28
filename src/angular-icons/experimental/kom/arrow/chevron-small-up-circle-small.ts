/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconChevronSmallUpCircleSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 4.5a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zm3.9 9.175l-3.904-3.95-3.904 3.949"
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
export class SvgIconChevronSmallUpCircleSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-chevron-small-up-circle-small',
  template: ` <svg sbbIconChevronSmallUpCircleSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChevronSmallUpCircleSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconChevronSmallUpCircleSmall, IconChevronSmallUpCircleSmall],
  exports: [SvgIconChevronSmallUpCircleSmall, IconChevronSmallUpCircleSmall],
})
export class IconChevronSmallUpCircleSmallModule {}

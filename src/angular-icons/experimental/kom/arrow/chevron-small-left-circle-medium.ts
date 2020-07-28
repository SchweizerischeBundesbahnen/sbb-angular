/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconChevronSmallLeftCircleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18 6.75c6.215 0 11.25 5.037 11.25 11.25 0 6.214-5.035 11.25-11.25 11.25-6.213 0-11.25-5.036-11.25-11.25 0-6.213 5.037-11.25 11.25-11.25zm2.512 5.394L14.587 18l5.922 5.856"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconChevronSmallLeftCircleMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-chevron-small-left-circle-medium',
  template: ` <svg sbbIconChevronSmallLeftCircleMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChevronSmallLeftCircleMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconChevronSmallLeftCircleMedium, IconChevronSmallLeftCircleMedium],
  exports: [SvgIconChevronSmallLeftCircleMedium, IconChevronSmallLeftCircleMedium],
})
export class IconChevronSmallLeftCircleMediumModule {}

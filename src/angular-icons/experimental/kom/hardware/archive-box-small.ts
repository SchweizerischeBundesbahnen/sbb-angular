/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconArchiveBoxSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8 11.8h5m4.5-3h-14m7.2-4H6.5l-3 4v12h14l3-4v-12h-4.4m-8.6 4l4-5 4 5m-2.9-3.625L14.5 2.8l3.87 4.84M17.5 20.8v-12l3-4"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconArchiveBoxSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-archive-box-small',
  template: ` <svg sbbIconArchiveBoxSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveBoxSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconArchiveBoxSmall, IconArchiveBoxSmall],
  exports: [SvgIconArchiveBoxSmall, IconArchiveBoxSmall],
})
export class IconArchiveBoxSmallModule {}

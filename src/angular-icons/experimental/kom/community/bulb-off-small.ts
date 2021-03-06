/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBulbOffSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.9 16c-1.4-.8-2.4-2.3-2.4-4 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.7-1 3.3-2.4 4m.4 0v2.1l-2 .7v.7h-1v-.7l-2-.7V16h5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBulbOffSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-bulb-off-small',
  template: ` <svg sbbIconBulbOffSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBulbOffSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBulbOffSmall, IconBulbOffSmall],
  exports: [SvgIconBulbOffSmall, IconBulbOffSmall],
})
export class IconBulbOffSmallModule {}

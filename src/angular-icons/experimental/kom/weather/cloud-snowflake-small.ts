/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudSnowflakeSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16.02 14.384c2.145-.702 1.878-4.172-.32-4.084 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.433-.042-3.2 1.9-1.9 0-2.449 3.385-.197 4.149M11.5 11v7m-3.486-3.5h7m-5.99-2.475l4.95 4.95m-4.935 0l4.95-4.95"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCloudSnowflakeSmall {}

@Component({
  selector: 'sbb-icon-cloud-snowflake-small',
  template: ` <svg sbbIconCloudSnowflakeSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSnowflakeSmall {}

@NgModule({
  declarations: [SvgIconCloudSnowflakeSmall, IconCloudSnowflakeSmall],
  exports: [SvgIconCloudSnowflakeSmall, IconCloudSnowflakeSmall],
})
export class IconCloudSnowflakeSmallModule {}

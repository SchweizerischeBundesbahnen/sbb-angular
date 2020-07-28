/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconKRSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M3.002 18.5h18-18zm0-13h18-18z" />
      <svg:path
        fill="#000"
        d="M10.094 7.998l-3.136 3.164 3.43 4.837H8.185l-2.43-3.59-1.007 1.007v2.583H3V7.998h1.746v3.31l3.136-3.31h2.21zm-.747 4.107h1.542v-1.542h.884v1.542h1.547v.883h-1.547v1.542h-.884v-1.542H9.347v-.883zm4.6-4.107h3.874c.766 0 1.353.12 1.762.36.34.198.598.46.777.789.18.329.27.699.27 1.11 0 .469-.114.875-.338 1.222a1.858 1.858 0 01-.939.744c.354.087.631.285.832.59.128.195.213.397.257.609.044.21.101.694.17 1.45.051.554.13.899.235 1.034l.076.093h-1.822a1.366 1.366 0 01-.134-.433c-.027-.174-.063-.58-.106-1.215-.044-.565-.182-.957-.414-1.173-.232-.217-.626-.326-1.185-.326h-1.57v3.147h-1.746V7.998zm1.745 1.374v2.2h1.67c.535 0 .913-.077 1.132-.23.277-.193.416-.485.416-.876 0-.38-.118-.657-.356-.831-.237-.176-.61-.263-1.122-.263h-1.74z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconKRSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-k-r-small',
  template: ` <svg sbbIconKRSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconKRSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconKRSmall, IconKRSmall],
  exports: [SvgIconKRSmall, IconKRSmall],
})
export class IconKRSmallModule {}

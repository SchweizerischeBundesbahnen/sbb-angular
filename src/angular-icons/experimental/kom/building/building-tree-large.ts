/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBuildingTreeLarge]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M4 41.5h40M9.5 7.5h35v-2h-35zM32.5 37.5v-6h6l-.018 6zM32.5 27.5v-6h6l-.018 6zM17 21.5h11.5l-.036 6h-5.473M21.95 31.5h6.55l-.036 6H15M11.5 41.5V27.429m-.002 4.558l3.976-2.975M11.5 34.431L9.639 32.57M32.5 17.5v-6h6l-.018 6zM15.5 17.5v-6h13l-.036 6z"
      />
      <svg:path
        d="M11.5 7.5v10.119m31 23.881v-34M21.314 28.087a4.248 4.248 0 00-5.861-3.93 4.766 4.766 0 10-7.924 3.241 5.308 5.308 0 107.154 6.898 2.554 2.554 0 004.375-2.456 4.248 4.248 0 002.256-3.753z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-building',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBuildingTreeLarge {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-building-tree-large',
  template: ` <svg sbbIconBuildingTreeLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBuildingTreeLarge {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBuildingTreeLarge, IconBuildingTreeLarge],
  exports: [SvgIconBuildingTreeLarge, IconBuildingTreeLarge],
})
export class IconBuildingTreeLargeModule {}

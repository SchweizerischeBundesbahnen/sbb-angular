/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBusSbbSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M4.5 18.5v2h3v-2m9.001 0v2H19.5v-2M17 5.5H7m12.5 6h-15m3 4.5A.5.5 0 106.498 16 .5.5 0 007.5 16zm10 0a.5.5 0 10-1.002.001A.5.5 0 0017.5 16zM17 3.5c1.706 0 2.5.794 2.5 2.5v12.5h-15V6c0-1.706.794-2.5 2.5-2.5h10zm-12.5 6h-1v1h1m15 0h1v-1h-1"
      />
      <svg:path
        fill="#000"
        d="M12.8 13l1.601 1.5H12.5V13h-1v1.5H9.6l1.6-1.5H10l-2 2 2 2h1.2l-1.6-1.5h1.9V17h1v-1.5h1.901L12.8 17H14l2-2-2-2z"
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
export class SvgIconBusSbbSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-bus-sbb-small',
  template: ` <svg sbbIconBusSbbSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusSbbSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBusSbbSmall, IconBusSbbSmall],
  exports: [SvgIconBusSbbSmall, IconBusSbbSmall],
})
export class IconBusSbbSmallModule {}

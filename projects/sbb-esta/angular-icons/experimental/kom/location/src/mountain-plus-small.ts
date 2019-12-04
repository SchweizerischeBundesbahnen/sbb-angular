/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMountainPlusSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15.94 6.502h5.065M11.5 5l7.903 14.048.847 1.452H2.75l2.538-4.35L11.5 5zM5.288 16.15l6.727-4.105 7.389 7.002M18.5 4v5"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconMountainPlusSmall {}

@Component({
  selector: 'sbb-icon-mountain-plus-small',
  template: `
    <svg sbbIconMountainPlusSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMountainPlusSmall {}

@NgModule({
  declarations: [SvgIconMountainPlusSmall, IconMountainPlusSmall],
  exports: [SvgIconMountainPlusSmall, IconMountainPlusSmall]
})
export class IconMountainPlusSmallModule {}

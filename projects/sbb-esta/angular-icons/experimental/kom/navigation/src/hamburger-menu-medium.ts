/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHamburgerMenuMedium]',
  template: `
    <svg:path fill="none" stroke="#000" d="M30 8.25H6h24zm0 21H6h24zm0-10.5H6h24z" />
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-navigation',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconHamburgerMenuMedium {}

@Component({
  selector: 'sbb-icon-hamburger-menu-medium',
  template: `
    <svg sbbIconHamburgerMenuMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconHamburgerMenuMedium {}

@NgModule({
  declarations: [SvgIconHamburgerMenuMedium, IconHamburgerMenuMedium],
  exports: [SvgIconHamburgerMenuMedium, IconHamburgerMenuMedium]
})
export class IconHamburgerMenuMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShoppingBagMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.25 11.185l-1.5 21h22.5l-1.5-21H8.25zM21.74 16.5l.01-9a3.75 3.75 0 10-7.5 0v9"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconShoppingBagMedium {}

@Component({
  selector: 'sbb-icon-shopping-bag-medium',
  template: `
    <svg sbbIconShoppingBagMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShoppingBagMedium {}

@NgModule({
  declarations: [SvgIconShoppingBagMedium, IconShoppingBagMedium],
  exports: [SvgIconShoppingBagMedium, IconShoppingBagMedium]
})
export class IconShoppingBagMediumModule {}

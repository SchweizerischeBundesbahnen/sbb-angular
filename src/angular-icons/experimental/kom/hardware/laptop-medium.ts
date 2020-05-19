/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLaptopMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 6.75h22.5v13.5l3 4.5v3H3.75v-3l3-4.5V6.75zm0 13.5h22.5m-25.5 4.5h28.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLaptopMedium {}

@Component({
  selector: 'sbb-icon-laptop-medium',
  template: ` <svg sbbIconLaptopMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLaptopMedium {}

@NgModule({
  declarations: [SvgIconLaptopMedium, IconLaptopMedium],
  exports: [SvgIconLaptopMedium, IconLaptopMedium],
})
export class IconLaptopMediumModule {}

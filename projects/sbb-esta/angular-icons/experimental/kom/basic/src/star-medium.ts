/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconStarMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15 15.75H6.75L13.5 21l-3 8.699L18 24.75l7.5 4.949-3-8.699 6.75-5.25H21l-3-9z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconStarMedium {}

@Component({
  selector: 'sbb-icon-star-medium',
  template: `
    <svg sbbIconStarMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconStarMedium {}

@NgModule({
  declarations: [SvgIconStarMedium, IconStarMedium],
  exports: [SvgIconStarMedium, IconStarMedium]
})
export class IconStarMediumModule {}

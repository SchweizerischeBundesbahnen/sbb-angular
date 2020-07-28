/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWalkieTalkieMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.25 30.75h13.5v-21h-13.5v21zm0-19.5h-1.5v6h1.5M21.75 4.5v5.25m-8.25 12h9m-9 3h9m-9 3h9M20.25 15c0 1.157-1.09 2.25-2.247 2.25-1.157 0-2.253-1.093-2.253-2.25 0-1.156 1.093-2.25 2.25-2.25s2.25 1.094 2.25 2.25z"
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
export class SvgIconWalkieTalkieMedium {}

@Component({
  selector: 'sbb-icon-walkie-talkie-medium',
  template: ` <svg sbbIconWalkieTalkieMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWalkieTalkieMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWalkieTalkieMedium, IconWalkieTalkieMedium],
  exports: [SvgIconWalkieTalkieMedium, IconWalkieTalkieMedium],
})
export class IconWalkieTalkieMediumModule {}

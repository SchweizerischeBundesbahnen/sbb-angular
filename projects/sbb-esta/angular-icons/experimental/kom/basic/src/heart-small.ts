/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHeartSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.2 7.776A4.977 4.977 0 0015.5 4.5a4.952 4.952 0 00-3.997 2.018A4.969 4.969 0 007.5 4.5a4.983 4.983 0 00-5.006 4.997c0 .87.22 1.687.605 2.397.22.403.48.771.792 1.096l7.61 7.61 7.598-7.6c.18-.218.606-.768.746-1.015.417-.73.655-1.58.655-2.488 0-.606-.106-1.185-.3-1.72z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconHeartSmall {}

@Component({
  selector: 'sbb-icon-heart-small',
  template: `
    <svg sbbIconHeartSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconHeartSmall {}

@NgModule({
  declarations: [SvgIconHeartSmall, IconHeartSmall],
  exports: [SvgIconHeartSmall, IconHeartSmall]
})
export class IconHeartSmallModule {}

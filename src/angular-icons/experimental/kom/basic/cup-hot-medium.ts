/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconCupHotMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M26.25 21c0 4.97-4.03 9-9 9s-9-4.03-9-9v-5.25h18V21zM6 30.75h22.5H6zm20.25-12h2.25a2.25 2.25 0 010 4.5h-2.535l.285-4.5zm-9-14.25v6-6zm4.5 1.5v6-6zm-9 0v6-6z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCupHotMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cup-hot-medium',
  template: ` <svg sbbIconCupHotMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCupHotMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCupHotMedium, IconCupHotMedium],
  exports: [SvgIconCupHotMedium, IconCupHotMedium],
})
export class IconCupHotMediumModule {}

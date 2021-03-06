/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconScreenInsideTrainMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M21.75 11.25v-6m-12 6v-6m-3 18h18v-12h-18v12zm2.25-9h13.5m-13.5 3h13.5M9 20.251h13.5m-18-15h20.25l6 6V31.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconScreenInsideTrainMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-screen-inside-train-medium',
  template: ` <svg sbbIconScreenInsideTrainMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconScreenInsideTrainMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconScreenInsideTrainMedium, IconScreenInsideTrainMedium],
  exports: [SvgIconScreenInsideTrainMedium, IconScreenInsideTrainMedium],
})
export class IconScreenInsideTrainMediumModule {}

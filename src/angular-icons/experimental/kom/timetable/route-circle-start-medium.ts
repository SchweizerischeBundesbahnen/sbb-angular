/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconRouteCircleStartMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.25 18.75a9 9 0 1118 0 9 9 0 01-18 0zm4.5.001a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm13.5 0h8.25"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconRouteCircleStartMedium {}

@Component({
  selector: 'sbb-icon-route-circle-start-medium',
  template: ` <svg sbbIconRouteCircleStartMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRouteCircleStartMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconRouteCircleStartMedium, IconRouteCircleStartMedium],
  exports: [SvgIconRouteCircleStartMedium, IconRouteCircleStartMedium],
})
export class IconRouteCircleStartMediumModule {}

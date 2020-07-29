/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocomotiveMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.25 23.25H27l-4.5-9h-5.25v9zM3 30.75h6.75V8.25H3m0-3.002h15M9.75 27h4.5m0-18.75v22.5l9 .002c6.873.003 10.404-1.286 8.063-7.176l-5.345-10.78c-1.616-2.935-3.82-4.594-8.718-4.546h-3z"
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
export class SvgIconLocomotiveMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-locomotive-medium',
  template: ` <svg sbbIconLocomotiveMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocomotiveMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLocomotiveMedium, IconLocomotiveMedium],
  exports: [SvgIconLocomotiveMedium, IconLocomotiveMedium],
})
export class IconLocomotiveMediumModule {}

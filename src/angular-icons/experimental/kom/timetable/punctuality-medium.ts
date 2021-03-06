/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconPunctualityMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M5.25 20.25c0-.252.008-.501.022-.75M16.5 8.273c.249-.015.498-.022.75-.022m0 0c6.627 0 12 5.372 12 12 0 6.626-5.373 12-12 12s-12-5.374-12-12m12-12.001V4.5M15 5.25h4.5m-7.5 15l3.75 4.5 8.25-9"
      />
      <svg:path stroke-dasharray="1 1" d="M5.473 17.937C6.455 12.906 10.58 9 15.719 8.347" />
    </svg:g>
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
export class SvgIconPunctualityMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-punctuality-medium',
  template: ` <svg sbbIconPunctualityMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPunctualityMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconPunctualityMedium, IconPunctualityMedium],
  exports: [SvgIconPunctualityMedium, IconPunctualityMedium],
})
export class IconPunctualityMediumModule {}

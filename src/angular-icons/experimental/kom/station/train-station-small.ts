/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconTrainStationSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M18.998 9a.5.5 0 11-1 0 .5.5 0 011 0" />
      <svg:path
        d="M18.998 9a.5.5 0 11-1 0 .5.5 0 011 0zM3 19.5h12.501v-3H21m-9.357-10c1.284 0 1.857.548 1.857 1.778V17.5h-10V8.278c0-1.23.574-1.778 1.858-1.778h6.285m1.857 6h-10m8-9h-6m4.5 5H7m-2.5 9v2m8-2v2M10 3.5L8.5 5.79 7 3.5M11.5 15a.5.5 0 11-1.002-.002A.5.5 0 0111.5 15zm-5 0a.5.5 0 11-1.002-.002A.5.5 0 016.5 15zm13-2v-2.5h-2V13h.5v3h1v-3h.5z"
      />
    </svg:g>
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTrainStationSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-train-station-small',
  template: ` <svg sbbIconTrainStationSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainStationSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTrainStationSmall, IconTrainStationSmall],
  exports: [SvgIconTrainStationSmall, IconTrainStationSmall],
})
export class IconTrainStationSmallModule {}

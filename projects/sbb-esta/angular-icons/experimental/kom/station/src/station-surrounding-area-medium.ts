/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconStationSurroundingAreaMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6 25.331c-1.42.702-2.25 1.532-2.25 2.418 0 2.468 6.348 4.5 14.25 4.5 7.904 0 14.25-2.032 14.25-4.5 0-.886-.83-1.716-2.25-2.416M16.5 12l1.5 1.5 2.25-2.25m3 2.25c0 2.93-2.32 5.25-5.25 5.25s-5.25-2.32-5.25-5.25S15.07 8.25 18 8.25s5.25 2.32 5.25 5.25zm-15-5.55v19.8h6v-4.486h7.5v4.486h6V7.95c-8.958-3.655-10.456-3.593-19.5 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconStationSurroundingAreaMedium {}

@Component({
  selector: 'sbb-icon-station-surrounding-area-medium',
  template: `
    <svg sbbIconStationSurroundingAreaMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconStationSurroundingAreaMedium {}

@NgModule({
  declarations: [SvgIconStationSurroundingAreaMedium, IconStationSurroundingAreaMedium],
  exports: [SvgIconStationSurroundingAreaMedium, IconStationSurroundingAreaMedium]
})
export class IconStationSurroundingAreaMediumModule {}

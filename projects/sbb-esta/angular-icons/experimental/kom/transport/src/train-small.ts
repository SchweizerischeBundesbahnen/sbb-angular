/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTrainSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16 17.5l2 4m-12 0l2-4m10 2H6m13 2H5m9-14h-4m8.5 5h-13M16 2.5H8m10.5 15h-13V8A2.5 2.5 0 018 5.5h8A2.5 2.5 0 0118.5 8v9.5zM10 2.5l2 3m2-3l-2 3m3.5 9.5a.5.5 0 10-1.002.001A.5.5 0 0015.5 15zm-6 0A.5.5 0 108.498 15 .5.5 0 009.5 15z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTrainSmall {}

@Component({
  selector: 'sbb-icon-train-small',
  template: `
    <svg sbbIconTrainSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTrainSmall {}

@NgModule({
  declarations: [SvgIconTrainSmall, IconTrainSmall],
  exports: [SvgIconTrainSmall, IconTrainSmall]
})
export class IconTrainSmallModule {}

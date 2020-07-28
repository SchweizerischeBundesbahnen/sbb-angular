/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCircleInformationMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-12.03-6V9m3.75 15.735h-7.5m3.75 0v-9H15"
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
export class SvgIconCircleInformationMedium {}

@Component({
  selector: 'sbb-icon-circle-information-medium',
  template: ` <svg sbbIconCircleInformationMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCircleInformationMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconCircleInformationMedium, IconCircleInformationMedium],
  exports: [SvgIconCircleInformationMedium, IconCircleInformationMedium],
})
export class IconCircleInformationMediumModule {}

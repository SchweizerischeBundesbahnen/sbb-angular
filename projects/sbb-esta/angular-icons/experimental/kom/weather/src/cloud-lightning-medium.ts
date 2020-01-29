/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudLightningMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M22.5 21.75c4.842 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.148-.063-4.8 2.85-3.212 0-3.85 6.45 1.2 6.45m7.5-1.5L15.75 24h3.253l-4.995 4.073L16.5 24.75h-3.75l4.5-4.5h2.25z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudLightningMedium {}

@Component({
  selector: 'sbb-icon-cloud-lightning-medium',
  template: `
    <svg sbbIconCloudLightningMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudLightningMedium {}

@NgModule({
  declarations: [SvgIconCloudLightningMedium, IconCloudLightningMedium],
  exports: [SvgIconCloudLightningMedium, IconCloudLightningMedium]
})
export class IconCloudLightningMediumModule {}

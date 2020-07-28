/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconQuestionMarkMedium]',
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M16.521 28.47v-2.909h3.023v2.909H16.52zm-4.77-14.155c.065-1.736.405-3.079 1.022-4.03a5.728 5.728 0 012.266-2.029c.94-.476 2-.713 3.176-.713 1.893 0 3.398.536 4.518 1.609 1.045.988 1.567 2.29 1.567 3.903 0 1.333-.354 2.48-1.064 3.44-.317.44-1.078 1.245-2.28 2.421-.532.514-.902.941-1.113 1.28-.208.34-.357.762-.439 1.266-.095.503-.141 1.157-.141 1.959h-2.378c.018-1.427.144-2.485.377-3.175.17-.505.408-.956.721-1.358.313-.4 1.005-1.152 2.078-2.252.69-.709 1.143-1.346 1.356-1.916.177-.485.267-.98.267-1.484 0-.931-.257-1.716-.77-2.349-.616-.774-1.525-1.161-2.728-1.161-2.49 0-3.832 1.528-4.029 4.588h-2.406z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconQuestionMarkMedium {}

@Component({
  selector: 'sbb-icon-question-mark-medium',
  template: ` <svg sbbIconQuestionMarkMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionMarkMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconQuestionMarkMedium, IconQuestionMarkMedium],
  exports: [SvgIconQuestionMarkMedium, IconQuestionMarkMedium],
})
export class IconQuestionMarkMediumModule {}

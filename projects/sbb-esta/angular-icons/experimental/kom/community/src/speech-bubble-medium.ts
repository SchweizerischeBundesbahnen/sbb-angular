/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSpeechBubbleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 9.75h22.5v16.5H14.625l-3.375 3.375V26.25h-4.5V9.75zm3.75 4.469h15.032m-15.063 3.125H25.5m-15.031 3h11.968"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSpeechBubbleMedium {}

@Component({
  selector: 'sbb-icon-speech-bubble-medium',
  template: `
    <svg sbbIconSpeechBubbleMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSpeechBubbleMedium {}

@NgModule({
  declarations: [SvgIconSpeechBubbleMedium, IconSpeechBubbleMedium],
  exports: [SvgIconSpeechBubbleMedium, IconSpeechBubbleMedium]
})
export class IconSpeechBubbleMediumModule {}

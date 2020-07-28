/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconTwoSpeechBubblesSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 5.5h12v9H8.75L6.5 16.75V14.5h-3v-9zm2.5 3h7m-7 2h6m3.5-2h5v9h-3v2.25l-2.25-2.25H9.5v-3m9.5-3h-3.5m2.5 2h-2.5"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTwoSpeechBubblesSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-two-speech-bubbles-small',
  template: ` <svg sbbIconTwoSpeechBubblesSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTwoSpeechBubblesSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTwoSpeechBubblesSmall, IconTwoSpeechBubblesSmall],
  exports: [SvgIconTwoSpeechBubblesSmall, IconTwoSpeechBubblesSmall],
})
export class IconTwoSpeechBubblesSmallModule {}

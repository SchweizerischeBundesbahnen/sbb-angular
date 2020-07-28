/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSpeakerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.5 6.067v11.865l-5.319-4.438H4.5v-3h3.681L13.5 6.068zM18.273 17.9l-2.267-1.4m2.267-10.402L16.006 7.5m3.598 1.609L16.006 10m0 3.999l3.597.893M20 12h-3.993"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSpeakerSmall {}

@Component({
  selector: 'sbb-icon-speaker-small',
  template: ` <svg sbbIconSpeakerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpeakerSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSpeakerSmall, IconSpeakerSmall],
  exports: [SvgIconSpeakerSmall, IconSpeakerSmall],
})
export class IconSpeakerSmallModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEnvelopeSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.99 12l5.51 5.5m-15 0L10 12m9.5-5.5L11.98 14 4.5 6.5m0 11h15v-11h-15v11z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconEnvelopeSmall {}

@Component({
  selector: 'sbb-icon-envelope-small',
  template: ` <svg sbbIconEnvelopeSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEnvelopeSmall {}

@NgModule({
  declarations: [SvgIconEnvelopeSmall, IconEnvelopeSmall],
  exports: [SvgIconEnvelopeSmall, IconEnvelopeSmall],
})
export class IconEnvelopeSmallModule {}

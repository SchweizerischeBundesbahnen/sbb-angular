/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSuitcaseDisabledSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.5 20V6.509h-11L7 6.5m-2.836.01H3.5V19.5h13.699M9.5 6.51v-3h5v3M2.343 4.655L19.348 21.65"
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
export class SvgIconSuitcaseDisabledSmall {}

@Component({
  selector: 'sbb-icon-suitcase-disabled-small',
  template: ` <svg sbbIconSuitcaseDisabledSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSuitcaseDisabledSmall {}

@NgModule({
  declarations: [SvgIconSuitcaseDisabledSmall, IconSuitcaseDisabledSmall],
  exports: [SvgIconSuitcaseDisabledSmall, IconSuitcaseDisabledSmall],
})
export class IconSuitcaseDisabledSmallModule {}

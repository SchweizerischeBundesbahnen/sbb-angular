/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconRewindSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.999 15.25l4.5 3.25v-4.334l1.5 1.084L19.5 18.5v-13l-4.501 3.25-1.5 1.083V5.5l-4.5 3.25L4.5 12z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-audio',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconRewindSmall {}

@Component({
  selector: 'sbb-icon-rewind-small',
  template: ` <svg sbbIconRewindSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRewindSmall {}

@NgModule({
  declarations: [SvgIconRewindSmall, IconRewindSmall],
  exports: [SvgIconRewindSmall, IconRewindSmall],
})
export class IconRewindSmallModule {}

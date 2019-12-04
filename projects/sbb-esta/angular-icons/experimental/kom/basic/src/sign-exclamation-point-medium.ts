/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSignExclamationPointMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.2 30.75h26.1L17.25 4.5 4.2 30.75zM17.25 24v3m0-6v-9"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSignExclamationPointMedium {}

@Component({
  selector: 'sbb-icon-sign-exclamation-point-medium',
  template: `
    <svg sbbIconSignExclamationPointMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSignExclamationPointMedium {}

@NgModule({
  declarations: [SvgIconSignExclamationPointMedium, IconSignExclamationPointMedium],
  exports: [SvgIconSignExclamationPointMedium, IconSignExclamationPointMedium]
})
export class IconSignExclamationPointMediumModule {}

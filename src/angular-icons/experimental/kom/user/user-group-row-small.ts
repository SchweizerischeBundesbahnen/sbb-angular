/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserGroupRowSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.53 8.121c-.417-.386-.94-.623-1.53-.623-1.424 0-2.5 1.334-2.5 3.002 0 1.667 1.076 3 2.5 3 1.314 0 2.32-1.138 2.47-2.622m0 0c.013-.125.03-.249.03-.378 0-.978-.376-1.832-.97-2.379m.134 4.632c2.52 1.446 3.626 3.796 3.836 6.747h-11c.05-3.026 1.4-5.367 3.817-6.76m7.213-6.618c-.418-.386-.94-.623-1.53-.623-1.314 0-2.319 1.138-2.47 2.622.593.547.97 1.401.97 2.38 0 .13-.018.252-.03.377.417.386.94.623 1.53.623 1.313 0 2.32-1.138 2.47-2.623M16 3.5c-1.313 0-2.319 1.139-2.47 2.623.594.547.97 1.401.97 2.379 0 .129-.018.252-.03.377.418.386.941.623 1.53.623 1.425 0 2.5-1.333 2.5-3 0-1.668-1.075-3.002-2.5-3.002zm-1.53 5.38c.013-.126.03-.249.03-.378 0-.978-.376-1.832-.97-2.379m.136 4.63c2.52 1.446 3.624 3.797 3.834 6.748h-4.324m4.494-8.744c2.52 1.447 3.62 3.793 3.83 6.744h-4.31"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserGroupRowSmall {}

@Component({
  selector: 'sbb-icon-user-group-row-small',
  template: ` <svg sbbIconUserGroupRowSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupRowSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconUserGroupRowSmall, IconUserGroupRowSmall],
  exports: [SvgIconUserGroupRowSmall, IconUserGroupRowSmall],
})
export class IconUserGroupRowSmallModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMagnifyingGlassSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12.89 12.889l7.11 7.11-7.111-7.11A5.5 5.5 0 119 3.5a5.5 5.5 0 013.89 9.389z"
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
export class SvgIconMagnifyingGlassSmall {}

@Component({
  selector: 'sbb-icon-magnifying-glass-small',
  template: ` <svg sbbIconMagnifyingGlassSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMagnifyingGlassSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconMagnifyingGlassSmall, IconMagnifyingGlassSmall],
  exports: [SvgIconMagnifyingGlassSmall, IconMagnifyingGlassSmall],
})
export class IconMagnifyingGlassSmallModule {}

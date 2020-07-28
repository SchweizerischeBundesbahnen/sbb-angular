/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserTieSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.084 11.697C7.144 12.757 5.5 16.25 5.5 19.5h13c0-3.27-1.648-6.753-4.588-7.803M12 5.5c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5S9 10.933 9 9s1.343-3.5 3-3.5zm1.912 6.197L12 14l1 4-1 1-1-1 1-4-1.916-2.303"
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
export class SvgIconUserTieSmall {}

@Component({
  selector: 'sbb-icon-user-tie-small',
  template: ` <svg sbbIconUserTieSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserTieSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconUserTieSmall, IconUserTieSmall],
  exports: [SvgIconUserTieSmall, IconUserTieSmall],
})
export class IconUserTieSmallModule {}

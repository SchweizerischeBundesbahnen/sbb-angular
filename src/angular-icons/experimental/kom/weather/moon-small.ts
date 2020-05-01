/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMoonSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.021 6.35c-6.9 5.3 1.8 15.9 8.9 8.7-5.9 2-10.5-4.3-8.9-8.7z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconMoonSmall {}

@Component({
  selector: 'sbb-icon-moon-small',
  template: `
    <svg sbbIconMoonSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMoonSmall {}

@NgModule({
  declarations: [SvgIconMoonSmall, IconMoonSmall],
  exports: [SvgIconMoonSmall, IconMoonSmall]
})
export class IconMoonSmallModule {}
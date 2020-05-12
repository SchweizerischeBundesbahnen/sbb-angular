/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSunMoonSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9 6.4c-6.9 5.3 1.8 15.9 8.9 8.7-5.9 2-10.5-4.3-8.9-8.7zm-.023 3.826C9.577 9.226 10.7 8.5 12 8.5c1.901 0 3.5 1.6 3.5 3.5 0 1.3-.744 2.56-1.844 3.158"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSunMoonSmall {}

@Component({
  selector: 'sbb-icon-sun-moon-small',
  template: ` <svg sbbIconSunMoonSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunMoonSmall {}

@NgModule({
  declarations: [SvgIconSunMoonSmall, IconSunMoonSmall],
  exports: [SvgIconSunMoonSmall, IconSunMoonSmall],
})
export class IconSunMoonSmallModule {}

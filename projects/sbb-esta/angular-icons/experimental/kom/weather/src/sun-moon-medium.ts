/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSunMoonMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.5 9.6c-10.35 7.95 2.7 23.85 13.35 13.05C18 25.65 11.1 16.2 13.5 9.6zm-.034 5.74c.9-1.5 2.585-2.59 4.533-2.59 2.852 0 5.25 2.4 5.25 5.25 0 1.95-1.116 3.839-2.766 4.737"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSunMoonMedium {}

@Component({
  selector: 'sbb-icon-sun-moon-medium',
  template: `
    <svg sbbIconSunMoonMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSunMoonMedium {}

@NgModule({
  declarations: [SvgIconSunMoonMedium, IconSunMoonMedium],
  exports: [SvgIconSunMoonMedium, IconSunMoonMedium]
})
export class IconSunMoonMediumModule {}

/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconOnboardingSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11 19.5h3m-7.5-2h12M6.5 2.499v19h12v-19h-12zm4 6.001l-2 2 2 2m4 0l2-2-2-2"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconOnboardingSmall {}

@Component({
  selector: 'sbb-icon-onboarding-small',
  template: ` <svg sbbIconOnboardingSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOnboardingSmall {}

@NgModule({
  declarations: [SvgIconOnboardingSmall, IconOnboardingSmall],
  exports: [SvgIconOnboardingSmall, IconOnboardingSmall],
})
export class IconOnboardingSmallModule {}

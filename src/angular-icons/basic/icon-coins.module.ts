import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-coins',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M42.5 14.5c0 2.764-7.317 5-16.5 5s-16.5-2.236-16.5-5 7.317-5 16.5-5 16.5 2.236 16.5 5zm0 4c0 6.695-33 6.695-33 0m33-2.04v2.04-4 1.96zm-33 0v2.04-4 1.96zm27 3.938V22.5 18.38v2.018zm-11 1.072v2.052V19.5v1.97zm-10-1.09v2.099-4.114 2.015zm10 3.142c-.271.004-2.226-.05-2.5-.05-9.182 0-16.5-2.237-16.5-5 0-1.076 1.107-2.07 3-2.886m30 6.914c0 6.695-33 6.695-33 0m33-.587v.587-.959.372zm-33-1.453v2.04-4 1.96zm33.002 1.154c1.899.815 3.01 1.812 3.01 2.89 0 2.762-7.318 5-16.5 5-7.756 0-14.182-1.597-15.991-3.758M42.5 28.5c0 6.843-33 6.843-33 0m33-2.04v2.04-4 1.96zm-33 .53v1.51-2.959 1.45zm27 3.44v2.136-4.185 2.05zm-11 1.095v2.106-4.13 2.024zm-10-1.104v2.14-4.196 2.056zM26 11.5c7.739 0 12.359 1.533 13.938 2.579m-27.884.004c1.157-.769 3.964-1.804 8.45-2.298A50.247 50.247 0 0126 11.5m16.5 21c0 6.843-33 6.843-33 0m33-2.04v2.04-4 1.96zm-33-.433V32.5v-4.849 2.376zm23-6.925v3.653m-11-1.31v2.076-4.07 1.994zm-10-1.348v2.115V22.066v2.03zm24 10.658v2.04-4.001 1.96zm-11 .818v2.04-4 1.96zm-10-1.315v2.048-4.016 1.968z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCoinsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCoinsComponent],
  exports: [IconCoinsComponent],
})
export class IconCoinsModule {}

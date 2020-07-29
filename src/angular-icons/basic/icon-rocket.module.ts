import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-rocket',
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
        d="M24.51 8.844c-12.832 14.5-6 30.37-6 30.37s6-5.52 12 0c0 0 6.834-15.87-6-30.37zM24.5 32v8m6.81-3.236c1.305.304 2.682.989 4.058 2.256 0 0 1.06-4.931-3.19-7.065M27.5 22.5a3 3 0 11-6 0 3 3 0 016 0zm-9.794 14.25c-1.32.297-2.718.984-4.115 2.27 0 0-1.072-4.977 3.25-7.094m4.133-18.302c.958.473 3.997 1.696 7.08.01"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRocketComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconRocketComponent],
  exports: [IconRocketComponent],
})
export class IconRocketModule {}

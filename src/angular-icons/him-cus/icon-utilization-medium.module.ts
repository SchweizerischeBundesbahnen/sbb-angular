import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-utilization-medium',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 16"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          fill="#000"
          d="M2.5 3C3.327 3 4 2.327 4 1.5S3.327 0 2.5 0 1 .673 1 1.5 1.673 3 2.5 3M0 4v6h1v6h3v-6h1V4zM9.504 3c.827 0 1.5-.673 1.5-1.5S10.33 0 9.504 0s-1.5.673-1.5 1.5.673 1.5 1.5 1.5M7.004 4v6h1v6h3v-6h1V4z"
        />
        <path
          fill="#BCBCBC"
          d="M16.508 3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5M14 4v6h1v6h3v-6h1V4z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUtilizationMediumComponent extends IconBase {
  constructor() {
    super({ width: '19px', height: '16px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconUtilizationMediumComponent],
  exports: [IconUtilizationMediumComponent],
})
export class IconUtilizationMediumModule {}

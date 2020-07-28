import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-utilization-high',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 16"
    >
      <g fill="#EB0000" fill-rule="evenodd">
        <path
          d="M2.5 3C3.327 3 4 2.327 4 1.5S3.327 0 2.5 0 1 .673 1 1.5 1.673 3 2.5 3m7.004 0c.827 0 1.5-.673 1.5-1.5S10.33 0 9.504 0s-1.5.673-1.5 1.5.673 1.5 1.5 1.5m7.004 0c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5M0 10h1v6h3v-6h1V4H0zM7.004 10h1v6h3v-6h1V4h-5zM14 4v6h1v6h3v-6h1V4z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUtilizationHighComponent extends IconBase {
  constructor() {
    super({ width: '19px', height: '16px', ratio: 1.1875 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconUtilizationHighComponent],
  exports: [IconUtilizationHighComponent],
})
export class IconUtilizationHighModule {}

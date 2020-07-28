import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-tt',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.001 15h-2.92l2.54-11.763h-3.94zM14.28 1.038l-.48 2.199h3.94l-2.539 11.764h2.92l2.541-11.764h3.94l.46-2.199z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTtComponent extends IconBase {
  constructor() {
    super({ width: '26px', height: '16px', ratio: 1.625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaTtComponent],
  exports: [IconSaTtComponent],
})
export class IconSaTtModule {}

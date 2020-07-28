import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-tf',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.001 15h-2.92l2.54-11.763h-3.94zM15.681 1.037h7.702l-.48 2.2h-4.881l-.74 3.441h4.661l-.441 2.201h-4.68L15.541 15h-2.8z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTfComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaTfComponent],
  exports: [IconSaTfComponent],
})
export class IconSaTfModule {}

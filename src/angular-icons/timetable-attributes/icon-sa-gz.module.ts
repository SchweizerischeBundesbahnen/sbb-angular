import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-gz',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M14.823 3.998c-1.08-.7-2.42-1.001-3.88-1.001C7.54 2.997 5.4 5.658 5.4 8.959c0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.74.62-4.103 0-6.843-1.881-6.843-6.201 0-5.102 3.341-8.242 8.382-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421zM18.4 1.037h9.582l-.48 2.2L19.08 12.8h6.361l-.46 2.2h-9.802l.44-2.2 8.402-9.563H17.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGzComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaGzComponent],
  exports: [IconSaGzComponent],
})
export class IconSaGzModule {}

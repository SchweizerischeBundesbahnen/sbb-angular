import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-rx',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M9.204 4.2L4.186 15.8H8.42l1.905-4.609 1.68-4.091h8.962l-1.21 2.788H12.32a65.809 65.809 0 001.557 1.596 239.543 239.543 0 002.879 2.799c.493.472 1.03.977 1.613 1.517h10.777l1.926-1.484 2.129-1.64 1.389 3.124h6.228l-1.926-3.17-1.726-2.877L45.612 4.2h-6.43l-3.585 2.675-1.3-2.675h-6.071l3.204 5.575-8.447 5.575a98.88 98.88 0 01-1.49-1.202c-.575-.472-1.318-1.06-2.229-1.765h.874c.493 0 .892-.004 1.199-.011.306-.008.526-.019.66-.034.233-.005.462-.059.673-.157.24-.232.424-.517.537-.832L26.232 4.2H9.204z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductRxComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductRxComponent],
  exports: [IconProductRxComponent],
})
export class IconProductRxModule {}

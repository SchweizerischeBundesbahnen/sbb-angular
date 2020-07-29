import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-re',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="58" height="19" x=".5" y=".5" fill="#FFF" stroke="#EB0000" rx="2" />
        <path
          fill="#EB0000"
          fill-rule="nonzero"
          d="M4.186 4.2h3.78c1.09 0 1.868.145 2.332.436.833.519 1.25 1.4 1.25 2.642 0 1.55-.638 2.476-1.914 2.777.76.122 1.263.434 1.51.937.13.278.213.576.25.88.039.318.075 1.01.106 2.08 0 .372.033.743.095 1.11.07.26.176.508.316.738H9.46a1.87 1.87 0 01-.217-.726c-.035-.294-.068-.927-.1-1.9a8.91 8.91 0 00-.11-1.333 1.261 1.261 0 00-.3-.611.967.967 0 00-.467-.27 3.667 3.667 0 00-.846-.071h-.917V15.8H4.186V4.2zm2.317 1.714v3.34h.91c.558 0 .959-.09 1.201-.27.4-.296.6-.782.601-1.46 0-.57-.141-.982-.423-1.233-.282-.251-.742-.377-1.38-.377h-.91zM13.058 4.2h6.46v1.92h-4.143v2.737h3.89v1.889h-3.89v3.134h4.31v1.92h-6.627z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductReComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductReComponent],
  exports: [IconProductReComponent],
})
export class IconProductReModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-rj',
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
          d="M6.093 15.802h-2.39L6.133 4.2h5.152c.886 0 1.576.091 2.07.273.493.182.891.516 1.194 1.001.304.486.456 1.074.456 1.765 0 .987-.296 1.8-.887 2.442-.59.64-1.485 1.038-2.683 1.19.306.275.594.636.863 1.085.533.907 1.126 2.19 1.78 3.846h-2.564c-.205-.654-.609-1.675-1.21-3.063-.328-.749-.676-1.253-1.045-1.511-.227-.153-.623-.23-1.187-.23h-.974l-1.005 4.804zm1.37-6.545h1.266c1.282 0 2.132-.076 2.552-.23.42-.152.748-.392.985-.72.238-.327.356-.67.356-1.028 0-.422-.171-.739-.514-.95-.211-.127-.667-.19-1.37-.19H8.112l-.649 3.118zM22.375 4.2h2.342l-1.464 7.028c-.39 1.862-.902 3.123-1.535 3.783-.633.66-1.607.989-2.92.989-1.114 0-1.947-.256-2.501-.768-.554-.511-.831-1.208-.831-2.089 0-.185.013-.39.04-.617l2.207-.238a4.424 4.424 0 00-.047.578c0 .37.105.652.316.847.211.195.536.293.974.293.612 0 1.042-.18 1.29-.539.185-.274.409-1.047.673-2.318L22.376 4.2z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductRjComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductRjComponent],
  exports: [IconProductRjComponent],
})
export class IconProductRjModule {}

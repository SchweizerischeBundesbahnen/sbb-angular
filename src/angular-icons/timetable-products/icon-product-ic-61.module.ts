import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ic-61',
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
          d="M44.435 7.122h-2.191c-.205-.89-.71-1.336-1.514-1.336-.851 0-1.456.524-1.813 1.574a9.32 9.32 0 00-.355 1.938 3.366 3.366 0 011.108-1.013c.44-.216.925-.322 1.415-.308a3.26 3.26 0 012.61 1.155c.638.764.972 1.74.937 2.737 0 1.302-.42 2.349-1.261 3.14a3.84 3.84 0 01-2.728 1.068c-1.361 0-2.42-.516-3.177-1.547-.756-1.03-1.135-2.469-1.135-4.315 0-1.972.405-3.517 1.214-4.635a3.751 3.751 0 013.209-1.622c1.277 0 2.254.43 2.932 1.29.41.547.669 1.194.75 1.874zm-3.902 2.65a1.53 1.53 0 00-1.317.697c-.3.43-.455.946-.441 1.47a2.489 2.489 0 00.45 1.48c.293.453.801.72 1.34.704a1.586 1.586 0 001.332-.672c.318-.432.485-.958.473-1.495a2.44 2.44 0 00-.426-1.448 1.64 1.64 0 00-1.411-.736zm10.706-5.537V15.8h-2.302V8.23h-2.712V6.553a5.797 5.797 0 001.376-.174c.352-.1.683-.266.973-.49.426-.328.712-.879.86-1.654h1.805zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIc61Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc61Component],
  exports: [IconProductIc61Component],
})
export class IconProductIc61Module {}

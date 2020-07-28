import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-bex',
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
          d="M4.186 15.8l2.42-11.6h3.952c.6-.013 1.2.013 1.798.08.508.058.999.22 1.443.474.383.225.694.554.899.95.207.406.313.856.307 1.313a2.693 2.693 0 01-.536 1.673 3.268 3.268 0 01-1.656 1.073 2.6 2.6 0 011.392.874c.327.4.504.903.5 1.42a3.655 3.655 0 01-.59 1.982 3.327 3.327 0 01-1.633 1.35c-.694.274-1.643.411-2.847.411h-5.45zm3.817-6.916h1.813a6.286 6.286 0 001.759-.174 1.472 1.472 0 001.072-1.416c.01-.266-.08-.526-.252-.728a1.261 1.261 0 00-.718-.38 9.592 9.592 0 00-1.253-.047H8.578l-.575 2.745zm-1.05 5.049H9.25c.962 0 1.607-.062 1.936-.186a1.64 1.64 0 00.788-.614 1.56 1.56 0 00.296-.902 1.216 1.216 0 00-.426-.953c-.284-.25-.757-.376-1.42-.376H7.586l-.631 3.03zM15.34 15.8l2.413-11.6h8.572l-.402 1.939h-6.19l-.553 2.635h5.986l-.402 1.938h-5.986l-.725 3.15h6.727l-.41 1.938h-9.03zm12.172 0h-3.076l5.102-5.871-2.87-5.729h2.484l1.127 2.176c.037.08.295.615.773 1.606.04.069.074.14.103.214.641-.786 1.18-1.43 1.616-1.93L34.593 4.2h2.989l-5.292 6.109 2.847 5.491h-2.681l-.867-1.749c-.453-.923-.752-1.585-.9-1.986a24.62 24.62 0 01-1.585 1.93L27.512 15.8z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductBexComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductBexComponent],
  exports: [IconProductBexComponent],
})
export class IconProductBexModule {}

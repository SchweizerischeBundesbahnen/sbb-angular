import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-nj',
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
          d="M12.966 15.78h-2.23L7.594 7.964 5.96 15.78H3.73L6.158 4.148h2.238l3.15 7.784 1.626-7.784h2.222L12.966 15.78zm9.469-11.632h2.349l-1.468 7.046c-.392 1.867-.905 3.131-1.54 3.793-.634.66-1.61.991-2.927.991-1.117 0-1.952-.256-2.508-.77-.555-.512-.833-1.21-.833-2.094 0-.185.013-.391.04-.619l2.213-.238a4.435 4.435 0 00-.047.58c0 .37.106.653.317.848.212.196.537.294.976.294.614 0 1.045-.18 1.294-.54.185-.275.41-1.05.674-2.325l1.46-6.966z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductNjComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductNjComponent],
  exports: [IconProductNjComponent],
})
export class IconProductNjModule {}

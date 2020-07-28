import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-lc',
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
          d="M4.421 1.037h2.801L4.721 12.8h5.481l-.48 2.2H1.46zM23.783 3.817c-.64-.439-1.7-.82-3.2-.82-3.102 0-5.282 2.341-5.282 5.621 0 2.341 1.52 4.422 3.981 4.422 1.18 0 2.14-.38 2.94-.86l-.44 2.68c-1.02.28-2.1.38-3.16.38-4.222 0-6.242-2.84-6.242-6.622 0-4.5 3.061-7.822 8.002-7.822 1.4 0 2.88.18 4.1.681l-.699 2.34z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaLcComponent extends IconBase {
  constructor() {
    super({ width: '26px', height: '16px', ratio: 1.625 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaLcComponent],
  exports: [IconSaLcComponent],
})
export class IconSaLcModule {}

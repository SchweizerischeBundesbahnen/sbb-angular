import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-tc',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.001 15h-2.92l2.54-11.763h-3.94zM24.903 3.817c-.64-.439-1.7-.82-3.2-.82-3.102 0-5.282 2.341-5.282 5.621 0 2.341 1.52 4.422 3.981 4.422 1.18 0 2.14-.38 2.94-.86l-.44 2.68c-1.02.28-2.1.38-3.16.38-4.222 0-6.242-2.84-6.242-6.622 0-4.5 3.061-7.822 8.002-7.822 1.4 0 2.88.18 4.1.681l-.699 2.34z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTcComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaTcComponent],
  exports: [IconSaTcComponent],
})
export class IconSaTcModule {}

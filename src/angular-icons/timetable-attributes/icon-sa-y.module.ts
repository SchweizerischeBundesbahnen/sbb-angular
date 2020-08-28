import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-y',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
    >
      <path
        fill-rule="evenodd"
        d="M6.421 9.219l-3.28-8.182h2.961l2.08 5.862 4.541-5.862h3.261L9.222 9.219 8.002 15H5.201z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaYComponent extends IconBase {
  constructor() {
    super({ width: '17px', height: '16px', ratio: 1.0625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaYComponent],
  exports: [IconSaYComponent],
})
export class IconSaYModule {}

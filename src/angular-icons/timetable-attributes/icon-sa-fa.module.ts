import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-fa',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.561 1.037h7.701l-.479 2.2H6.902l-.74 3.441h4.66l-.44 2.201h-4.68L4.42 15H1.621zM15.781 9.599h4.32l-.88-6.081h-.08l-3.36 6.08zm2.341-8.562h3.1L23.762 15h-2.8l-.48-3.201h-5.94l-1.782 3.2h-3.1l8.462-13.962z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaFaComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaFaComponent],
  exports: [IconSaFaComponent],
})
export class IconSaFaModule {}

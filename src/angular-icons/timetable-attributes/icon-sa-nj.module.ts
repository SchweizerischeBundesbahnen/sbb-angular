import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-nj',
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
          d="M4.501 1.037h3.54l2.981 10.603h.041l2.28-10.603h2.64L12.963 15H9.361L6.441 4.298h-.04L4.181 15H1.5zM23.661 1.037l-1.96 9.482c-.54 2.8-1.44 4.721-4.602 4.721-.78 0-1.58-.08-2.339-.28l.64-2.38c.34.12.78.22 1.28.22 1.48 0 1.96-1.08 2.22-2.36l1.96-9.403h2.801z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaNjComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaNjComponent],
  exports: [IconSaNjComponent],
})
export class IconSaNjModule {}

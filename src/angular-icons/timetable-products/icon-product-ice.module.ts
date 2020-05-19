import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ice',
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
          d="M6.62 4.202h2.417L6.603 15.798H4.186L6.62 4.202zm12.235 2.31a4.402 4.402 0 00-1.11-.5 5.199 5.199 0 00-1.473-.182c-1.302 0-2.367.427-3.195 1.28-.828.852-1.242 1.954-1.242 3.305 0 1.108.309 2.01.927 2.708a3.058 3.058 0 002.4 1.047c.381.002.76-.048 1.127-.15.445-.14.872-.329 1.275-.565l-.365 2.227c-.154.033-.37.077-.645.132-.276.056-.55.1-.82.133-.36.038-.722.055-1.084.05-1.634 0-2.914-.482-3.842-1.445-.927-.964-1.39-2.304-1.39-4.02 0-1.983.607-3.567 1.82-4.752 1.215-1.185 2.849-1.777 4.902-1.777a9.38 9.38 0 011.697.124c.436.083.734.15.894.2.16.05.394.13.704.24l-.58 1.944zm2.434-2.31h6.805l-.348 1.828h-4.52l-.596 2.857h4.04l-.364 1.827h-4.057l-.679 3.256h4.57l-.397 1.828h-6.888l2.434-11.596z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIceComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIceComponent],
  exports: [IconProductIceComponent],
})
export class IconProductIceModule {}

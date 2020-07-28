import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-90',
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
          d="M36.561 12.897h2.176c.179.896.696 1.345 1.553 1.345.446.015.877-.165 1.179-.495.302-.33.534-.842.697-1.538.114-.498.19-1.003.229-1.511a3.5 3.5 0 01-1.084 1.056 2.72 2.72 0 01-1.352.312c-.8.016-1.58-.247-2.207-.743A3.506 3.506 0 0136.73 9.97a4.416 4.416 0 01-.367-1.803c0-1.303.444-2.358 1.332-3.164a3.926 3.926 0 012.744-1.045 3.828 3.828 0 011.82.443c.563.3 1.044.731 1.404 1.258.668.965 1.001 2.32 1.001 4.066 0 1.613-.294 2.99-.883 4.129-.767 1.482-1.929 2.223-3.484 2.223-1.036 0-1.89-.288-2.566-.863a3.396 3.396 0 01-1.17-2.317zm3.832-6.985a1.58 1.58 0 00-1.254.61c-.352.443-.534.999-.512 1.565-.01.48.12.952.37 1.36a1.65 1.65 0 002.744.151 2.42 2.42 0 00.465-1.487 2.476 2.476 0 00-.481-1.542 1.599 1.599 0 00-1.332-.657zm9.152-1.954a3.587 3.587 0 012.318.807c.662.538 1.143 1.366 1.443 2.484.232.91.346 1.845.339 2.784 0 1.661-.295 3.027-.883 4.098a3.797 3.797 0 01-1.36 1.44 3.782 3.782 0 01-4.285-.349c-1.188-1.012-1.782-2.742-1.782-5.189 0-1.74.31-3.137.93-4.192a3.705 3.705 0 013.28-1.883zm-.086 1.954c-.757 0-1.272.438-1.546 1.313-.215.696-.323 1.672-.323 2.927-.027.9.084 1.8.331 2.666.284.87.81 1.305 1.577 1.305.636 0 1.109-.338 1.419-1.013.31-.675.465-1.706.465-3.093 0-1.18-.11-2.112-.331-2.792-.284-.875-.815-1.313-1.592-1.313zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr90Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr90Component],
  exports: [IconProductIr90Component],
})
export class IconProductIr90Module {}

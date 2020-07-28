import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-95',
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
          d="M36.561 12.897h2.176c.178.896.696 1.345 1.553 1.344.446.016.876-.164 1.178-.494.303-.33.535-.842.698-1.538.114-.498.19-1.003.229-1.511a3.5 3.5 0 01-1.084 1.056 2.72 2.72 0 01-1.352.312c-.8.016-1.58-.247-2.208-.743a3.503 3.503 0 01-1.02-1.353 4.414 4.414 0 01-.367-1.804c0-1.302.444-2.357 1.332-3.164a3.926 3.926 0 012.744-1.044 3.828 3.828 0 011.82.443c.563.3 1.044.731 1.404 1.258.667.965 1.001 2.32 1.001 4.066 0 1.613-.294 2.99-.883 4.129-.767 1.482-1.929 2.223-3.484 2.223-1.036 0-1.891-.288-2.566-.863a3.396 3.396 0 01-1.171-2.317zm3.831-6.985a1.58 1.58 0 00-1.253.61 2.37 2.37 0 00-.513 1.566c-.008.48.12.951.371 1.36a1.65 1.65 0 002.743.15 2.42 2.42 0 00.466-1.487 2.475 2.475 0 00-.481-1.542 1.598 1.598 0 00-1.333-.657zM53.07 4.235v2.057h-4.643l-.497 2.602a2.808 2.808 0 012.136-.886 3.678 3.678 0 012.223.688c.936.692 1.404 1.74 1.404 3.149 0 1.381-.5 2.476-1.498 3.282a4.283 4.283 0 01-2.79.95c-1.22 0-2.2-.329-2.941-.985-.741-.657-1.133-1.544-1.175-2.662h2.262c.026.377.163.738.395 1.036a1.917 1.917 0 002.9.016c.348-.443.53-.995.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.895 1.895 0 00-1.695.98l-2.057-.031 1.096-6.447h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr95Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr95Component],
  exports: [IconProductIr95Component],
})
export class IconProductIr95Module {}

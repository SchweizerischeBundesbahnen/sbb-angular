import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-70',
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
          d="M44.381 4.235v1.962c-.063.069-.25.282-.56.64-.488.58-.919 1.207-1.284 1.872-.397.688-.73 1.413-.994 2.163a18.19 18.19 0 00-.906 4.928h-2.381c.033-.98.185-1.952.453-2.895a18.824 18.824 0 011.187-3.18c.72-1.498 1.45-2.613 2.191-3.346h-5.44V4.235h7.734zm5.164-.276a3.587 3.587 0 012.318.806c.662.538 1.143 1.366 1.442 2.484.233.91.347 1.846.34 2.785 0 1.66-.295 3.026-.884 4.097a3.797 3.797 0 01-1.36 1.44 3.782 3.782 0 01-4.284-.348c-1.188-1.013-1.782-2.743-1.782-5.19 0-1.74.31-3.137.93-4.192a3.705 3.705 0 013.28-1.882zm-.087 1.953c-.756 0-1.272.438-1.545 1.313-.215.696-.323 1.672-.323 2.927-.028.9.084 1.8.331 2.666.284.87.81 1.305 1.577 1.305.636 0 1.109-.337 1.419-1.012.31-.675.465-1.706.465-3.093 0-1.182-.11-2.112-.331-2.793-.284-.875-.815-1.313-1.593-1.313zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr70Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr70Component],
  exports: [IconProductIr70Component],
})
export class IconProductIr70Module {}

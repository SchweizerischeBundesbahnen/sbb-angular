import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-27',
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
          d="M44.665 13.743V15.8h-8.301a5.32 5.32 0 01.303-1.796 4.374 4.374 0 01.856-1.47c.305-.337.639-.647.997-.926.381-.301 1.14-.852 2.274-1.654.448-.285.84-.65 1.16-1.075.223-.343.339-.746.33-1.155.02-.453-.14-.896-.445-1.23a1.538 1.538 0 00-1.17-.471c-1.188 0-1.8.857-1.838 2.57h-2.215v-.252c0-1.403.392-2.49 1.175-3.26.762-.748 1.747-1.122 2.956-1.122a4.008 4.008 0 012.688.917c.783.665 1.175 1.558 1.175 2.682a3.69 3.69 0 01-.938 2.53c-.175.204-.367.39-.576.558-.178.14-.649.477-1.41 1.01-.726.505-1.245.893-1.558 1.162a6.221 6.221 0 00-.87.925h5.407zm8.696-9.508v1.962c-.063.069-.25.282-.56.64-.489.58-.92 1.207-1.285 1.872-.397.688-.73 1.413-.993 2.163a18.188 18.188 0 00-.907 4.928h-2.38c.032-.98.184-1.952.452-2.895a18.824 18.824 0 011.187-3.18c.72-1.498 1.45-2.613 2.192-3.346h-5.44V4.235h7.734zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr27Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr27Component],
  exports: [IconProductIr27Component],
})
export class IconProductIr27Module {}

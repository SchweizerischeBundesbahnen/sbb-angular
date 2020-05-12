import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-26',
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
          d="M44.665 13.743V15.8h-8.301a5.32 5.32 0 01.303-1.796 4.374 4.374 0 01.856-1.47c.305-.337.639-.647.997-.926.381-.301 1.14-.852 2.274-1.654.448-.285.84-.65 1.16-1.075.223-.343.339-.746.33-1.155.02-.453-.14-.896-.445-1.23a1.538 1.538 0 00-1.17-.471c-1.188 0-1.8.857-1.838 2.57h-2.215v-.252c0-1.403.392-2.49 1.175-3.26.762-.748 1.747-1.122 2.956-1.122a4.008 4.008 0 012.688.917c.783.665 1.175 1.558 1.175 2.682a3.69 3.69 0 01-.938 2.53c-.175.204-.367.39-.576.558-.178.14-.649.477-1.41 1.01-.726.505-1.245.893-1.558 1.162a6.221 6.221 0 00-.87.925h5.407zm8.782-6.62h-2.191c-.205-.892-.71-1.337-1.514-1.337-.851 0-1.456.524-1.813 1.574a9.318 9.318 0 00-.355 1.938 3.365 3.365 0 011.108-1.013c.44-.216.925-.322 1.415-.308a3.26 3.26 0 012.61 1.155 4.05 4.05 0 01.937 2.737c0 1.302-.42 2.349-1.26 3.14a3.84 3.84 0 01-2.729 1.068c-1.36 0-2.42-.516-3.177-1.547-.756-1.03-1.135-2.469-1.135-4.315 0-1.972.405-3.517 1.214-4.635a3.752 3.752 0 013.209-1.621c1.277 0 2.254.43 2.932 1.289a3.89 3.89 0 01.75 1.875zm-3.902 2.65a1.53 1.53 0 00-1.316.696c-.3.43-.455.946-.442 1.47a2.489 2.489 0 00.45 1.48c.294.453.801.72 1.34.704a1.586 1.586 0 001.332-.672c.318-.432.485-.958.473-1.495a2.44 2.44 0 00-.426-1.448 1.64 1.64 0 00-1.411-.736zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr26Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr26Component],
  exports: [IconProductIr26Component],
})
export class IconProductIr26Module {}

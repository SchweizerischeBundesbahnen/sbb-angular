import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-65',
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
          d="M44.468 7.123h-2.191c-.205-.892-.71-1.337-1.514-1.337-.852 0-1.456.524-1.813 1.574a9.323 9.323 0 00-.355 1.938 3.365 3.365 0 011.108-1.013c.44-.216.925-.322 1.415-.308a3.26 3.26 0 012.61 1.155c.638.765.972 1.74.937 2.737 0 1.302-.42 2.349-1.261 3.14a3.84 3.84 0 01-2.728 1.068c-1.361 0-2.42-.516-3.177-1.547-.757-1.03-1.135-2.469-1.135-4.315 0-1.972.405-3.517 1.214-4.635a3.752 3.752 0 013.209-1.621c1.277 0 2.254.43 2.932 1.289.41.548.669 1.194.75 1.875zm-3.902 2.65a1.53 1.53 0 00-1.317.696c-.3.43-.455.946-.441 1.47a2.489 2.489 0 00.45 1.48c.293.453.801.72 1.34.704a1.587 1.587 0 001.332-.672c.318-.432.485-.958.473-1.495a2.44 2.44 0 00-.426-1.448 1.64 1.64 0 00-1.411-.736zm12.503-5.538v2.057h-4.643l-.497 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.404 1.74 1.404 3.148 0 1.382-.5 2.476-1.498 3.283a4.283 4.283 0 01-2.79.949c-1.22 0-2.2-.328-2.941-.985-.741-.656-1.133-1.544-1.175-2.662h2.263c.025.377.162.738.394 1.036a1.917 1.917 0 002.9.016c.348-.443.53-.994.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.896 1.896 0 00-1.695.98l-2.057-.031 1.096-6.447h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr65Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr65Component],
  exports: [IconProductIr65Component],
})
export class IconProductIr65Module {}

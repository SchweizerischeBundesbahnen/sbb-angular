import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-25',
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
          d="M44.665 13.743V15.8h-8.301a5.32 5.32 0 01.303-1.796 4.374 4.374 0 01.856-1.47c.305-.337.639-.647.997-.926.381-.301 1.14-.852 2.274-1.654.448-.285.84-.65 1.16-1.075.223-.343.339-.746.33-1.155.02-.453-.14-.896-.445-1.23a1.538 1.538 0 00-1.17-.471c-1.188 0-1.8.857-1.838 2.57h-2.215v-.252c0-1.403.392-2.49 1.175-3.26.762-.748 1.747-1.122 2.956-1.122a4.008 4.008 0 012.688.917c.783.665 1.175 1.558 1.175 2.682a3.69 3.69 0 01-.938 2.53c-.175.204-.367.39-.576.558-.178.14-.649.477-1.41 1.01-.726.505-1.245.893-1.558 1.162a6.221 6.221 0 00-.87.925h5.407zm8.404-9.508v2.057h-4.643l-.497 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.404 1.74 1.404 3.148 0 1.382-.5 2.476-1.498 3.283a4.283 4.283 0 01-2.79.949c-1.22 0-2.2-.328-2.941-.985-.741-.656-1.133-1.544-1.175-2.662h2.263c.025.377.162.738.394 1.037a1.917 1.917 0 002.9.015c.348-.443.53-.994.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.895 1.895 0 00-1.695.98l-2.057-.03 1.096-6.448h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr25Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr25Component],
  exports: [IconProductIr25Component],
})
export class IconProductIr25Module {}

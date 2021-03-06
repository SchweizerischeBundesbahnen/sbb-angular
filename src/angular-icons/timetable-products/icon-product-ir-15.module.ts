import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-15',
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
          d="M42.292 4.235V15.8H39.99V8.23h-2.712V6.553a5.796 5.796 0 001.376-.174c.353-.1.684-.266.974-.49.425-.327.712-.878.859-1.654h1.805zm10.777 0v2.057h-4.643l-.497 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.404 1.74 1.404 3.148 0 1.382-.5 2.476-1.498 3.283a4.283 4.283 0 01-2.79.949c-1.22 0-2.2-.328-2.941-.985-.741-.656-1.133-1.544-1.175-2.662h2.263c.025.377.162.738.394 1.037a1.917 1.917 0 002.9.015c.348-.443.53-.994.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.895 1.895 0 00-1.695.98l-2.057-.03 1.096-6.448h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr15Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr15Component],
  exports: [IconProductIr15Component],
})
export class IconProductIr15Module {}

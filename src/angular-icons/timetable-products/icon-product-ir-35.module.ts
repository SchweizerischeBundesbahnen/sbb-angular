import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-35',
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
          d="M36.608 7.898a4.344 4.344 0 01.702-2.389c.715-1.034 1.79-1.55 3.224-1.55 1.104 0 1.995.282 2.673.846a2.953 2.953 0 011.096 2.373 2.593 2.593 0 01-.43 1.499 2.107 2.107 0 01-1.163.85c.59.123 1.114.462 1.47.95.37.518.559 1.143.54 1.78a3.545 3.545 0 01-1.261 2.807c-.778.675-1.76 1.013-2.948 1.013-1.288 0-2.309-.372-3.063-1.115-.754-.744-1.131-1.749-1.131-3.014v-.15h2.215c0 .711.168 1.261.504 1.649.364.4.889.613 1.427.581.615 0 1.088-.182 1.42-.546.301-.335.465-.774.457-1.226a1.686 1.686 0 00-.584-1.352c-.32-.275-.814-.412-1.482-.412-.187 0-.374.01-.56.032v-1.7c.137.01.268.015.395.015 1.324 0 1.986-.493 1.986-1.479a1.359 1.359 0 00-.433-1.048 1.62 1.62 0 00-1.143-.4 1.575 1.575 0 00-1.254.507c-.294.337-.452.83-.473 1.479h-2.184zm16.46-3.663v2.057h-4.642l-.497 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.404 1.74 1.404 3.148 0 1.382-.5 2.476-1.498 3.283a4.283 4.283 0 01-2.79.949c-1.22 0-2.2-.328-2.941-.985-.741-.656-1.133-1.544-1.175-2.662h2.263c.025.377.162.738.394 1.037a1.917 1.917 0 002.9.015c.348-.443.53-.994.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.895 1.895 0 00-1.695.98l-2.057-.03 1.096-6.448h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr35Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr35Component],
  exports: [IconProductIr35Component],
})
export class IconProductIr35Module {}

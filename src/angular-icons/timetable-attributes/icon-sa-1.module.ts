import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-1',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M1 1h11.667v14H1V1zm1.296 12.727h9.074V2.273H2.296v11.454z" />
        <path d="M7.218 12.455V5.628L5.77 7.132l-.881-1.336L7.4 3.545h1.378v8.91h-1.56" />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSa1Component extends IconBase {
  constructor() {
    super({ width: '14px', height: '16px', ratio: 0.875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSa1Component],
  exports: [IconSa1Component],
})
export class IconSa1Module {}

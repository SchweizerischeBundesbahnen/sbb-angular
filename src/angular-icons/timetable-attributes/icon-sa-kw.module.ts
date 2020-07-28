import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-kw',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M7.421 1.037l-1.18 5.481h.04l5.541-5.481h3.901L8.662 7.398l4.5 7.602h-3.34l-3.88-7.102L4.421 15H1.62L4.621 1.037zM33.184 1.038l-4.941 10.701h-.04l-.06-10.701h-3.761l-4.64 10.701h-.041l-.419-10.701h-2.801l.879 13.963h3.462l4.92-11.163h.04l.14 11.163h3.501l6.662-13.963z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaKwComponent extends IconBase {
  constructor() {
    super({ width: '37px', height: '16px', ratio: 2.3125 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaKwComponent],
  exports: [IconSaKwComponent],
})
export class IconSaKwModule {}

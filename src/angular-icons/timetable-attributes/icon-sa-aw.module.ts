import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-aw',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M9.462 1.038L1 15.001h3.1L5.88 11.8h5.943l.479 3.202h2.8l-2.54-13.963h-3.1zm1.02 2.48h.08l.88 6.081H7.12l3.36-6.08zM34.263 1.038L29.322 11.74h-.04l-.06-10.702h-3.761l-4.64 10.702h-.041l-.419-10.702H17.56l.879 13.963h3.462l4.92-11.162h.04l.14 11.162h3.501l6.662-13.963z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaAwComponent extends IconBase {
  constructor() {
    super({ width: '38px', height: '16px', ratio: 2.375 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaAwComponent],
  exports: [IconSaAwComponent],
})
export class IconSaAwModule {}

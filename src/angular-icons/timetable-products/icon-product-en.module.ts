import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-en',
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
          d="M8.623 15.8h-.336c-.03-.013-.064-.03-.101-.043a.28.28 0 00-.1-.024l-.315-.158-.38-.335-2.576-2.048-.426-.382a.693.693 0 01-.203-.518c.01-.231.096-.453.246-.63l6.835-6.857.269-.223.246-.182c.243-.146.524-.216.807-.2h12.526l-2.71 2.741h-7.934L12.723 8.74h7.933l-1.815 1.778h-7.933l-1.77 1.774h7.865L13.575 15.8H8.623zM33.115 4.2v8.475L41.563 4.2h5.4L35.401 15.8h-5.849V7.301L21.084 15.8h-5.358L27.268 4.2h5.847z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductEnComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductEnComponent],
  exports: [IconProductEnComponent],
})
export class IconProductEnModule {}

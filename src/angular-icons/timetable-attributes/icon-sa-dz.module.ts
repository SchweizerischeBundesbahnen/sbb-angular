import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-dz',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 16"
    >
      <path
        fill-rule="evenodd"
        d="M22.292 11.304v.104c0 .641-.24 1.189-.724 1.643a2.47 2.47 0 01-1.751.681 2.434 2.434 0 01-1.725-.673c-.477-.448-.717-.988-.717-1.615v-.14H15.59v.104c0 .641-.24 1.189-.729 1.643-.488.454-1.076.681-1.764.681a2.459 2.459 0 01-1.737-.673c-.482-.447-.722-.987-.722-1.613v-.142H8.851v.104c0 .641-.24 1.189-.724 1.643a2.467 2.467 0 01-1.752.681 2.46 2.46 0 01-1.715-.664c-.483-.442-.724-.983-.724-1.622l-.02-.142H1V8.288h4.597V5.02H1.016V2.843h7.859v3.111h9.45V1h2.363v4.954h3.726l1.786 5.35h-3.908"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaDzComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaDzComponent],
  exports: [IconSaDzComponent],
})
export class IconSaDzModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-fl',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 16"
    >
      <path
        fill-rule="evenodd"
        d="M16.924 1h-2.668l1.952 1.95h-.113a6.75 6.75 0 00-5.562 2.929 6.749 6.749 0 00-5.56-2.928h-.114L6.811 1H4.142L1 4.142l3.142 3.143h2.669l-1.952-1.95h.113c2.41 0 4.37 1.96 4.37 4.369V15h2.383V9.704c0-2.41 1.96-4.37 4.37-4.37h.113l-1.952 1.951h2.668l3.143-3.143L16.924 1z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaFlComponent extends IconBase {
  constructor() {
    super({ width: '21px', height: '16px', ratio: 1.3125 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaFlComponent],
  exports: [IconSaFlComponent],
})
export class IconSaFlModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-vi',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.141 1.037h2.801l1.3 10.862h.04l5.801-10.862h3.04L8.322 15H4.981zM17.62 1.037h2.921L17.6 15h-2.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaViComponent extends IconBase {
  constructor() {
    super({ width: '22px', height: '16px', ratio: 1.375 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaViComponent],
  exports: [IconSaViComponent],
})
export class IconSaViModule {}

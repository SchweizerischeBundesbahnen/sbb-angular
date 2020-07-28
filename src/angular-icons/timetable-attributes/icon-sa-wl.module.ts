import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-wl',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 16"
    >
      <path
        fill-rule="evenodd"
        d="M23.556 15H21.44v-4.9H3.115V15H1V1h.966c.483 0 1.09.267 1.822.808a8.991 8.991 0 011.898 1.881c.53.719.929 1.423 1.194 2.114.266.692.4 1.424.4 2.197h2.1c0-1.53.511-2.915 1.533-3.92 1.022-1.007 2.275-1.74 3.756-1.68h8.887V15"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWlComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaWlComponent],
  exports: [IconSaWlComponent],
})
export class IconSaWlModule {}

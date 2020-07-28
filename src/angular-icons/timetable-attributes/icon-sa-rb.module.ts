import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-rb',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 16"
    >
      <path
        fill-rule="evenodd"
        d="M5.941 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L11.882 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L4.22 15h-2.8L4.34 1.037zm13.72 5.64h1.1c1.42 0 2.961-.398 2.961-2.04 0-1.34-1.28-1.4-2.34-1.4H18.8l-.74 3.44zM16.78 12.8h.96c1.72 0 3.64-.2 3.64-2.36 0-1.461-1.36-1.681-2.86-1.681h-.9l-.84 4.04zm-.22-11.763h4.14c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.062-2.98 3.322v.04c1.56.24 2.24 1.44 2.24 2.94 0 4-4.48 4.32-6.56 4.32H13.64l2.92-13.962z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRbComponent extends IconBase {
  constructor() {
    super({ width: '26px', height: '16px', ratio: 1.625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRbComponent],
  exports: [IconSaRbComponent],
})
export class IconSaRbModule {}

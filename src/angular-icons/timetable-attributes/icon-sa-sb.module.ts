import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-sb',
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
        d="M11.402 3.718c-.82-.42-1.88-.721-2.9-.721-1 0-2.34.4-2.34 1.6 0 2.24 4.76 2.1 4.76 5.982 0 3.42-2.68 4.66-5.742 4.66-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.662-.68 2.662-2.18 0-2.52-4.762-2.12-4.762-5.841C3.24 2.077 5.76.797 8.441.797c1.221 0 2.481.16 3.621.62l-.66 2.3zm5.559 2.96h1.1c1.42 0 2.962-.4 2.962-2.04 0-1.34-1.281-1.4-2.341-1.4H17.7l-.74 3.44zM15.68 12.8h.96c1.72 0 3.64-.2 3.64-2.36 0-1.461-1.36-1.681-2.86-1.681h-.9l-.84 4.04zm-.22-11.763h4.14c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.062-2.98 3.322v.04c1.56.24 2.24 1.44 2.24 2.94 0 4-4.48 4.32-6.56 4.32H12.54l2.92-13.962z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaSbComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaSbComponent],
  exports: [IconSaSbComponent],
})
export class IconSaSbModule {}

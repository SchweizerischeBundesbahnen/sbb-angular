import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-sc',
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
        d="M11.402 3.718c-.82-.42-1.88-.721-2.9-.721-1 0-2.34.4-2.34 1.6 0 2.24 4.76 2.1 4.76 5.982 0 3.42-2.68 4.66-5.742 4.66-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.662-.68 2.662-2.18 0-2.52-4.762-2.12-4.762-5.841C3.24 2.077 5.76.797 8.441.797c1.221 0 2.481.16 3.621.62l-.66 2.3zm13.501.1c-.64-.44-1.7-.82-3.2-.82-3.102 0-5.282 2.34-5.282 5.62 0 2.341 1.52 4.422 3.981 4.422 1.18 0 2.14-.38 2.94-.86l-.44 2.68c-1.02.28-2.1.38-3.16.38-4.222 0-6.242-2.84-6.242-6.622 0-4.5 3.061-7.822 8.002-7.822 1.4 0 2.88.18 4.1.681l-.699 2.34z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaScComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaScComponent],
  exports: [IconSaScComponent],
})
export class IconSaScModule {}

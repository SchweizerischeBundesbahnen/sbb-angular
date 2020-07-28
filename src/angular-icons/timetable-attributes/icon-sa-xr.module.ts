import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-xr',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M7.421 1.037l2.021 4.801h.04l3.84-4.801h3.301l-5.781 6.661L14.082 15h-3.06l-2.14-5.602h-.04L4.481 15H1l6.461-7.582L4.4 1.037zM20.161 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L26.102 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L18.44 15h-2.8l2.92-13.963z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaXrComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaXrComponent],
  exports: [IconSaXrComponent],
})
export class IconSaXrModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-xt',
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
          d="M7.421 1.037l2.021 4.801h.04l3.84-4.801h3.301l-5.781 6.661L14.082 15h-3.06l-2.14-5.602h-.04L4.481 15H1l6.461-7.582L4.4 1.037zM17.38 1.038l-.48 2.199h3.94l-2.539 11.764h2.92l2.541-11.764h3.94l.46-2.199z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaXtComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaXtComponent],
  exports: [IconSaXtComponent],
})
export class IconSaXtModule {}

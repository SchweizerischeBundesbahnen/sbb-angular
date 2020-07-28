import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-xp',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M7.421 1.037l2.021 4.801h.04l3.84-4.801h3.301l-5.781 6.661L14.082 15h-3.06l-2.14-5.602h-.04L4.481 15H1l6.461-7.582L4.4 1.037zM20.041 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.141-1.721-2.341-1.721h-.88l-.9 4.261zM18.44 15h-2.8l2.961-13.963h2.36c2.581 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.901 5.041h-1.62L18.44 15z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaXpComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaXpComponent],
  exports: [IconSaXpComponent],
})
export class IconSaXpModule {}

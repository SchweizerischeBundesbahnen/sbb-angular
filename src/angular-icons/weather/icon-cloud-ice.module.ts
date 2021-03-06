import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-ice',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.203 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9z"
          />
          <path
            fill="#000"
            d="M6 17v-1h1v1H6zm2 0v-1h1v1H8zm-2 2v-1h1v1H6zm1-1v-1h1v1H7zm1 1v-1h1v1H8zm2 2v-1h1v1h-1zm2 0v-1h1v1h-1zm-2 2v-1h1v1h-1zm1-1v-1h1v1h-1zm1 1v-1h1v1h-1zm2-6v-1h1v1h-1zm2 0v-1h1v1h-1zm-2 2v-1h1v1h-1zm1-1v-1h1v1h-1zm1 1v-1h1v1h-1z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c4.805 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85z"
          />
          <path
            fill="#000"
            d="M9 25.5V24h1.5v1.5H9zm3 0V24h1.5v1.5H12zm-3 3V27h1.5v1.5H9zm1.5-1.5v-1.5H12V27h-1.5zm1.5 1.5V27h1.5v1.5H12zm3 3V30h1.5v1.5H15zm3 0V30h1.5v1.5H18zm-3 3V33h1.5v1.5H15zm1.5-1.5v-1.5H18V33h-1.5zm1.5 1.5V33h1.5v1.5H18zm3-9V24h1.5v1.5H21zm3 0V24h1.5v1.5H24zm-3 3V27h1.5v1.5H21zm1.5-1.5v-1.5H24V27h-1.5zm1.5 1.5V27h1.5v1.5H24z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudIceComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudIceComponent],
  exports: [IconCloudIceComponent],
})
export class IconCloudIceModule {}

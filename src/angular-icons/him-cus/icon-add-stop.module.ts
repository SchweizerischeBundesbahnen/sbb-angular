import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-add-stop',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M8.559 10.646a2.724 2.724 0 01-.709.104 2.69 2.69 0 01-.791-.13A2.744 2.744 0 015.1 8c0-1.239.83-2.278 1.959-2.62.252-.076.514-.13.791-.13.247 0 .481.043.709.105A2.745 2.745 0 0110.6 8c0 1.27-.869 2.331-2.041 2.646m0-6.824V0h-1.5v3.83A4.253 4.253 0 003.6 8a4.252 4.252 0 003.459 4.17V16h1.5v-3.821C10.565 11.839 12.1 10.101 12.1 8c0-2.1-1.535-3.838-3.541-4.178"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAddStopComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconAddStopComponent],
  exports: [IconAddStopComponent],
})
export class IconAddStopModule {}

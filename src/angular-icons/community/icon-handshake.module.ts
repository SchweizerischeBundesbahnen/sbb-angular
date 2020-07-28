import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-handshake',
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
        <path
          fill="none"
          stroke="#000"
          d="M18.972 15.133L14.75 10.75 10.2 13c-1.22.612-2.374-.694-1.45-1.8 2.234-2.435 4.066-4.742 6.05-4.1l4 1.25 2.7-1.5v6.85l-8.1 4.5s-.571.3-1.4.3c-.828 0-1.4-.3-1.4-.3l-8.1-4.5V6.85l2.7 1.5 3.902-1.227c1.126-.281 2.106.005 2.964.758"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M28.458 22.7l-6.333-6.575L15.3 19.5c-1.831.918-3.562-1.041-2.176-2.7 3.35-3.653 6.099-7.113 9.075-6.15l6 1.875 4.05-2.25V20.55L20.1 27.3s-.858.45-2.101.45c-1.242 0-2.1-.45-2.1-.45L3.75 20.55V10.275l4.051 2.25 5.852-1.84c1.689-.422 3.159.007 4.446 1.136"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M21.876 31.248l5.498 2.97a1.86 1.86 0 002.512-.749 1.875 1.875 0 00-.747-2.525m-4.478-2.42l7.314 3.952a1.859 1.859 0 002.512-.749c.485-.897.13-2.014-.766-2.498m-6.153-3.324l7.75 4.187a1.859 1.859 0 002.511-.749 1.86 1.86 0 00-.749-2.512l-10.318-5.574L19.9 24.65c-2.44 1.222-4.75-1.39-2.9-3.6 4.466-4.872 8.131-9.484 12.1-8.2l8 2.5 5.4-3v13.7l-4.455 2.474m-13.041 4.413a1.859 1.859 0 01-1.772 3.269L4.5 26.636V11.888l5.4 3 7.803-2.454c2.252-.561 4.448.215 6.165 1.72"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandshakeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconHandshakeComponent],
  exports: [IconHandshakeComponent],
})
export class IconHandshakeModule {}

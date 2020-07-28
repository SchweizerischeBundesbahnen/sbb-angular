import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wifi',
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
          d="M13.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2.22 8.712C4.679 6.123 8.147 4.5 12 4.5c3.854 0 7.32 1.623 9.78 4.212m0 0C19.32 6.123 15.853 4.5 12 4.5c-3.854 0-7.32 1.623-9.78 4.212m2.173 2.064A10.46 10.46 0 0112 7.5a10.46 10.46 0 017.607 3.276m0 0A10.46 10.46 0 0012 7.5a10.46 10.46 0 00-7.607 3.276m2.178 2.069a7.473 7.473 0 015.435-2.341c2.138 0 4.062.9 5.428 2.335m0 0a7.469 7.469 0 00-5.428-2.335 7.47 7.47 0 00-5.434 2.34m2.172 2.064A4.477 4.477 0 0112 13.5c1.284 0 2.436.545 3.256 1.408m0 0A4.477 4.477 0 0012 13.5a4.477 4.477 0 00-3.256 1.408"
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
          d="M20.25 27a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM3.33 13.068C7.018 9.185 12.22 6.75 18 6.75c5.78 0 10.981 2.435 14.671 6.318m0 0C28.98 9.185 23.78 6.75 18 6.75c-5.782 0-10.982 2.435-14.672 6.318m3.26 3.096C9.46 13.144 13.506 11.25 18 11.25c4.496 0 8.541 1.893 11.41 4.914m.001 0c-2.87-3.02-6.915-4.914-11.41-4.914-4.496 0-8.541 1.893-11.41 4.914m3.266 3.103a11.209 11.209 0 018.152-3.512c3.207 0 6.093 1.35 8.142 3.503m0 0a11.203 11.203 0 00-8.143-3.503 11.205 11.205 0 00-8.15 3.512m3.258 3.095A6.715 6.715 0 0118 20.25c1.926 0 3.654.817 4.884 2.112m0 0A6.715 6.715 0 0018 20.25a6.715 6.715 0 00-4.884 2.112"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWifiComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWifiComponent],
  exports: [IconWifiComponent],
})
export class IconWifiModule {}

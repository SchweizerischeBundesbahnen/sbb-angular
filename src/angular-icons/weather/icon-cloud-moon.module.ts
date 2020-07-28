import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-moon',
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
          d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.262 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm10.175 1.304C18.636 11.9 21.51 11.208 22.5 9c-4.168 1.762-6.956-2.354-5.518-5.2-.953.444-1.913 1-2.528 3.034"
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
          d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c4.893 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm15.262 1.957c1.892.594 6.203-.444 7.688-3.756-6.252 2.643-10.434-3.531-8.277-7.8-1.43.666-2.87 1.498-3.792 4.55"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudMoonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudMoonComponent],
  exports: [IconCloudMoonComponent],
})
export class IconCloudMoonModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-lightning-moon',
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
          d="M15 14.5c3.313 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9-2.141 0-2.567 4.3.8 4.3m9.375-2.996C18.636 11.9 21.51 11.208 22.5 9c-4.168 1.762-6.956-2.354-5.518-5.2-1.089.326-1.913 1-2.528 3.034M13 13.5L10.5 16h2.169l-3.33 2.715L11 16.5H8.5l3-3H13z"
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
          d="M22.5 21.75c4.97 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.148-.063-4.8 2.85-3.212 0-3.85 6.45 1.2 6.45m14.063-4.493c1.891.594 6.202-.444 7.687-3.756-6.252 2.643-10.434-3.531-8.277-7.8-1.633.489-2.87 1.498-3.792 4.55M19.5 20.25L15.75 24h3.253l-4.995 4.073L16.5 24.75h-3.75l4.5-4.5h2.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudLightningMoonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudLightningMoonComponent],
  exports: [IconCloudLightningMoonComponent],
})
export class IconCloudLightningMoonModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-charging-station',
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
          d="M5.5 9.5h6v-4h-6v4zm8-2h2v9a2 2 0 004 0v-3m2-2a2 2 0 01-4 0v-1h4v1zm-3-1V8m2 2.5V8m-17 12.5h10v-17h-10v17z"
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
          d="M8.25 14.25h9v-6h-9v6zm12-3h3v13.5a3.001 3.001 0 006 0v-4.5m3-3a3.001 3.001 0 01-6 0v-1.5h6v1.5zm-4.5-1.5V12m3 3.75V12M5.25 30.75h15V5.25h-15v25.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChargingStationComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconChargingStationComponent],
  exports: [IconChargingStationComponent],
})
export class IconChargingStationModule {}

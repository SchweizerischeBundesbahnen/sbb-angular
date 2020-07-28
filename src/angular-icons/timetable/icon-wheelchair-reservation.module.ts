import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wheelchair-reservation',
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
          d="M8.703 10.932A4.014 4.014 0 006.505 14.5c0 2.198 1.802 4 4 4a4.016 4.016 0 003.62-2.304M2.5 21.5h19v-19h-19v19zm8-13.5v5.5h5V19M11 6a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M13.055 16.398c-1.952.994-3.297 3.024-3.297 5.352 0 3.297 2.703 6 6 6 2.39 0 4.467-1.42 5.43-3.456M3.75 32.25h28.5V3.75H3.75v28.5zm12-20.25v8.25h7.5v8.25M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairReservationComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairReservationComponent],
  exports: [IconWheelchairReservationComponent],
})
export class IconWheelchairReservationModule {}

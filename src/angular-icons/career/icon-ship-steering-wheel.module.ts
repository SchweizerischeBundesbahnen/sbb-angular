import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ship-steering-wheel',
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
          d="M11.5 6.5v3-3zm0-4.5v2.5V2zM7.965 7.964l2.12 2.122-2.12-2.122zM4.782 4.783L6.55 6.55 4.782 4.783zM6.5 11.5h3-3zm-4.5 0h2.5H2zm5.965 3.535l2.12-2.12-2.12 2.12zm-3.183 3.183L6.55 16.45l-1.768 1.768zM11.5 16.5v-3 3zm0 4.5v-2.5V21zm3.535-5.965l-2.12-2.12 2.12 2.12zm3.183 3.183L16.45 16.45l1.768 1.768zM16.5 11.5h-3 3zm4.5 0h-2.5H21zm-5.965-3.536l-2.12 2.122 2.12-2.122zm3.183-3.181L16.45 6.55l1.768-1.768zM18.5 11.5a7 7 0 10-14 0 7 7 0 0014 0zm-2 0a5 5 0 10-10 0 5 5 0 0010 0zm-3 0a2 2 0 10-4.001.001A2 2 0 0013.5 11.5z"
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
          d="M17.25 9.75v4.5-4.5zm0-6.75v3.75V3zm-5.303 8.947l3.182 3.183-3.182-3.183zM7.173 7.174l2.652 2.652-2.652-2.652zM9.75 17.25h4.5-4.5zm-6.75 0h3.75H3zm8.947 5.303l3.182-3.182-3.182 3.182zm-4.774 4.774l2.652-2.652-2.652 2.652zM17.25 24.75v-4.5 4.5zm0 6.75v-3.75 3.75zm5.303-8.947L19.37 19.37l3.182 3.182zm4.774 4.774l-2.652-2.652 2.652 2.652zM24.75 17.25h-4.5 4.5zm6.75 0h-3.75 3.75zm-8.947-5.303L19.37 15.13l3.182-3.183zm4.774-4.773l-2.652 2.652 2.652-2.652zm.423 10.076c0-5.799-4.701-10.5-10.5-10.5s-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5 10.5-4.701 10.5-10.5zm-3 0a7.5 7.5 0 10-15 0c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zm-4.5 0a3.001 3.001 0 00-6 0 3.001 3.001 0 006 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShipSteeringWheelComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconShipSteeringWheelComponent],
  exports: [IconShipSteeringWheelComponent],
})
export class IconShipSteeringWheelModule {}

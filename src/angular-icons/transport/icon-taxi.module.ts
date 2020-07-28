import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-taxi',
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
          d="M5.5 16.5v2h3v-2m7 0l.001 2H18.5v-2m-13-6H4m16 0h-1.5m0 1h-13m11 0a2 2 0 00-4 0m3.5-5c1.706 0 2.5.794 2.5 2.5v7.5h-13V9c0-1.706.794-2.5 2.5-2.5h8m-2.5 0V5h-3v1.5m-2 7.5A.5.5 0 107.498 14 .5.5 0 008.5 14zm8 0a.5.5 0 10-1.002.001A.5.5 0 0016.5 14z"
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
          d="M8.25 24.75v3h4.5v-3m10.5 0l.002 3h4.498v-3M8.25 15.75H6m24 0h-2.25m0 1.5H8.25m16.5 0a3 3 0 00-6 0M24 9.75c2.559 0 3.75 1.19 3.75 3.75v11.25H8.25V13.5c0-2.56 1.191-3.75 3.75-3.75h12m-3.75 0V7.5h-4.5v2.25M12.75 21a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm12 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTaxiComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTaxiComponent],
  exports: [IconTaxiComponent],
})
export class IconTaxiModule {}

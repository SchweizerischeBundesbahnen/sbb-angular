import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-flashlight-on',
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
          d="M8.503 21.5H14.5v-10H8.503v10zM15.5 9l-1 2.5h-6L7.5 9V6.5h8V9zm-5 10.5h2v-6h-2v6zm1-4.5v1m-4-7h8m-4-7v3M14 5l2-3M9 5L7 2"
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
          d="M12.755 32.25h8.995v-15h-8.995v15zM23.25 13.5l-1.5 3.75h-9l-1.5-3.75V9.75h12v3.75zm-7.5 15.75h3v-9h-3v9zm1.5-6.75V24m-6-10.5h12m-6-10.5v4.5m3.75 0L24 3M13.5 7.5l-3-4.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFlashlightOnComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconFlashlightOnComponent],
  exports: [IconFlashlightOnComponent],
})
export class IconFlashlightOnModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-share',
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
          d="M14.745 6.492c.333.612.978 1.008 1.755 1.008 1.144 0 2-.856 2-2 0-1.144-.856-2-2-2-1.144 0-2 .856-2 2 0 .366.088.703.245.992l-6.58 3.857C7.816 9.825 7.219 9.5 6.5 9.5c-1.157 0-2 .843-2 2 0 1.156.843 2 2 2 .771 0 1.402-.375 1.737-.966.169-.297.263-.648.263-1.034 0-.438-.121-.832-.334-1.15zm.033 9.96l-6.54-3.917 6.54 3.918c.351-.602.975-.953 1.722-.953 1.117 0 2 .883 2 2 0 1.118-.883 2-2 2a1.979 1.979 0 01-1.994-2c0-.37.099-.748.272-1.047z"
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
          d="M22.117 9.738c.5.918 1.467 1.512 2.633 1.512 1.716 0 3-1.284 3-3s-1.284-3-3-3-3 1.284-3 3a3.1 3.1 0 00.367 1.488l-9.868 5.785c-.526-.786-1.422-1.273-2.499-1.273-1.736 0-3 1.265-3 3 0 1.734 1.264 3 3 3 1.156 0 2.103-.562 2.605-1.449.254-.445.395-.972.395-1.55 0-.658-.181-1.249-.501-1.727zm.05 14.941l-9.811-5.877 9.811 5.877c.526-.903 1.462-1.43 2.583-1.43 1.675 0 3 1.325 3 3 0 1.678-1.325 3-3 3a2.968 2.968 0 01-2.991-3c0-.554.148-1.121.408-1.57z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShareComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconShareComponent],
  exports: [IconShareComponent],
})
export class IconShareModule {}

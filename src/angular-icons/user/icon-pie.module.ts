import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-pie',
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
          d="M18.5 12.588V19.5l-13-.02v-7.04m0 3.05h13m-13 2h13M16.47 11a1.51 1.51 0 103 0V7.51H4.5V11a1.41 1.41 0 001.45 1.5c.775.024 1.432-.696 1.49-1.47A1.46 1.46 0 019 9.51c.806-.006 1.465.684 1.47 1.49 0 .014 0-.013 0 0a1.51 1.51 0 103 0c-.096-.828.498-1.498 1.327-1.593a1.51 1.51 0 011.673 1.326V11zM7.5 7.51V4m9 3.51V4m-3 3.51V4m-3 3.51V4"
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
          d="M27.75 18.881V29.25l-19.5-.028V18.66m0 4.574h19.5m-19.5 3h19.5M24.705 16.5a2.265 2.265 0 104.5 0v-5.235H6.75V16.5a2.116 2.116 0 002.175 2.25c1.162.036 2.148-1.044 2.235-2.205a2.19 2.19 0 012.34-2.28c1.209-.01 2.197 1.026 2.205 2.235 0 .02 0-.02 0 0a2.266 2.266 0 004.5.52 2.158 2.158 0 000-.52c-.144-1.242.747-2.247 1.99-2.39a2.265 2.265 0 012.51 1.989v.4zM11.25 11.265V6m13.5 5.265V6m-4.5 5.265V6m-4.5 5.265V6"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPieComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconPieComponent],
  exports: [IconPieComponent],
})
export class IconPieModule {}

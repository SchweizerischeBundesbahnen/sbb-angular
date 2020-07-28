import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-circle-information-small',
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
          d="M19.5 12c0 4.188-3.313 7.5-7.5 7.5-4.188 0-7.5-3.312-7.5-7.5 0-4.188 3.312-7.5 7.5-7.5 4.187 0 7.5 3.312 7.5 7.5zm-7.02-3V7m2.5 8.49h-5m2.5 0v-5H10"
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
          d="M29.25 18c0 6.282-4.97 11.25-11.25 11.25-6.282 0-11.25-4.968-11.25-11.25S11.718 6.75 18 6.75c6.28 0 11.25 4.968 11.25 11.25zm-10.53-4.5v-3m3.75 12.735h-7.5m3.75 0v-7.5H15"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCircleInformationSmallComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCircleInformationSmallComponent],
  exports: [IconCircleInformationSmallComponent],
})
export class IconCircleInformationSmallModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-rain',
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
          d="M7.2 10.2c-.232-1.942 1.88-2.982 3.2-1.9 1.5-3.4 6.4-1.7 5.3 2 2.5-.1 2.55 4.2-.7 4.2H8c-3.367 0-2.94-4.3-.8-4.3zM8.5 16l-1 2 1-2zm6 0l-1 2 1-2zm-4 0l-2 4 2-4zm2.05 0l-2 4 2-4z"
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
          d="M10.8 15.3c-.348-2.913 2.819-4.473 4.8-2.85 2.25-5.1 9.6-2.55 7.95 3 3.75-.15 3.825 6.3-1.05 6.3H12c-5.05 0-4.411-6.45-1.2-6.45zm1.95 8.7l-1.5 3 1.5-3zm9 0l-1.5 3 1.5-3zm-6 0l-3 6 3-6zm3.075 0l-3 6 3-6z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudRainComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudRainComponent],
  exports: [IconCloudRainComponent],
})
export class IconCloudRainModule {}

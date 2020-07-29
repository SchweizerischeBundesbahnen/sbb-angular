import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-dense-fog',
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
          d="M7.2 10.2c-.232-1.942 1.88-2.982 3.2-1.9 1.5-3.4 6.4-1.7 5.3 2 2.5-.1 2.621 4.2-.7 4.2H8c-3.367 0-2.94-4.3-.8-4.3zM5 16.5h12.993H5zm0 4h12.993H5zm1-2h10.993H6z"
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
          d="M10.8 15.3c-.348-2.913 2.819-4.473 4.8-2.85 2.25-5.1 9.6-2.55 7.95 3 3.75-.15 3.932 6.3-1.05 6.3H12c-5.05 0-4.411-6.45-1.2-6.45zm-3.3 9.45h19.49H7.5zm0 6h19.49H7.5zm1.5-3h16.49H9z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudDenseFogComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudDenseFogComponent],
  exports: [IconCloudDenseFogComponent],
})
export class IconCloudDenseFogModule {}

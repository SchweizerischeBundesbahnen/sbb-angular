import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sunrise',
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
          d="M9.3 15c-.52-.675-.8-1.577-.8-2.5 0-2.217 1.783-4 4-4 2.218 0 4 1.783 4 4 0 .946-.355 1.813-.9 2.497M4 12.5h3m-.562-6.15l2.268 2.258M12.5 4v3m6.153-.558l-2.266 2.251M21 12.5h-3m-13 4h13.993"
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
          d="M13.95 22.5c-.78-1.012-1.2-2.366-1.2-3.75 0-3.325 2.674-6 6-6 3.327 0 6 2.675 6 6 0 1.419-.533 2.72-1.35 3.745M6 18.75h4.5m-.843-9.226l3.402 3.387M18.75 6v4.5m9.23-.836L24.58 13.04m6.919 5.71H27m-19.5 6h20.99"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunriseComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSunriseComponent],
  exports: [IconSunriseComponent],
})
export class IconSunriseModule {}

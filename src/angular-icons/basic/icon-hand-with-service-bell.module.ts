import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hand-with-service-bell',
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
          d="M2 11.5h19M8.861 17.028L4.126 13.72a1 1 0 10-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2m7.5-6c0-4.103-3.842-6-8-6-4.158 0-8 1.897-8 6m9-7a1 1 0 11-2 0 1 1 0 012 0z"
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
          d="M3 17.25h28.5m-18.208 8.292L6.19 20.58a1.501 1.501 0 10-1.878 2.34l8.887 7.83h5.915l1.512 1.5H31.8l-7.542-7.596c-1.706-1.641-3.876-2.862-6.095-2.904h-3.163c-2.978 0-3.048 4.5 0 4.5h3m11.249-9c0-6.154-5.763-9-12-9s-12 2.846-12 9m13.5-10.5a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandWithServiceBellComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHandWithServiceBellComponent],
  exports: [IconHandWithServiceBellComponent],
})
export class IconHandWithServiceBellModule {}

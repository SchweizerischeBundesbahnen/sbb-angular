import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-combined-mobility',
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
          d="M18.5 17a.5.5 0 10-1.002.001A.5.5 0 0018.5 17zm-11 2.5v2h3v-2m7.001 0v2H20.5v-2m1.5-6h-1.5m0 1H12m6.5 0a2 2 0 00-4 0m-4.5 2a.5.5 0 100 1 .5.5 0 000-1zM7.5 19v.5h13V12c0-1.705-.794-2.5-2.5-2.5h-1m-3.5-4l.937 2.063M19 5L4 20M6 6.5c1.93 0 3.5 1.57 3.5 3.5S7.93 13.5 6 13.5 2.5 11.93 2.5 10 4.07 6.5 6 6.5M6 10l2-4.5h5.5l2-3H12m-5.792 1h2.793"
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
          d="M27.75 25.5a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm-16.5 3.75v3h4.5v-3m10.502 0v3h4.498v-3M33 20.25h-2.25m0 1.5H18m9.75-.001a3.001 3.001 0 00-6 0m-6.75 3a.75.75 0 100 1.5.75.75 0 000-1.5zm-3.75 3.75v.75h19.5V18c0-2.558-1.191-3.75-3.75-3.75h-1.5m-5.25-6l1.405 3.094M28.5 7.5L6 30M9 9.75A5.256 5.256 0 0114.25 15 5.255 5.255 0 019 20.25 5.255 5.255 0 013.75 15 5.256 5.256 0 019 9.75M9 15l3-6.75h8.25l3-4.5H18m-8.687 1.5H13.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCombinedMobilityComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCombinedMobilityComponent],
  exports: [IconCombinedMobilityComponent],
})
export class IconCombinedMobilityModule {}

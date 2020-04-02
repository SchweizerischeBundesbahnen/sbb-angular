/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-seat-window',
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
          d="M6 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 14H6.5l-4-11m14.791 14.042L14.708 16.5h-6.5l-2.5-7h2l1.5 4.01h3.771m-1.481-3.01h9v-6h-9v6zm0-1l2.002-2 2 2 3-3 2 2"
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
          d="M9 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm12 21H9.75l-6-16.5m22.186 21.063l-3.874-7.563h-9.75l-3.75-10.5h3l2.25 6.015h5.656m-2.221-4.515h13.5v-9h-13.5v9zm0-1.5l3.003-3 3 3 4.5-4.5 3 3"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSeatWindowComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSeatWindowComponent],
  exports: [IconSeatWindowComponent]
})
export class IconSeatWindowModule {}
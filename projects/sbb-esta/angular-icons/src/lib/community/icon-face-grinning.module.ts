/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-face-grinning',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M9 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M20.5 12c0 4.746-3.754 8.5-8.5 8.5S3.5 16.746 3.5 12c0-4.747 3.754-8.5 8.5-8.5s8.5 3.753 8.5 8.5zM15 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2 4c0 2.792-2.208 5-5 5s-5-2.208-5-5h10z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M13.5 12.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-8.25-5.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m3 6c0 4.188-3.312 7.5-7.5 7.5-4.188 0-7.5-3.312-7.5-7.5h15z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFaceGrinningComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceGrinningComponent],
  exports: [IconFaceGrinningComponent]
})
export class IconFaceGrinningModule {}

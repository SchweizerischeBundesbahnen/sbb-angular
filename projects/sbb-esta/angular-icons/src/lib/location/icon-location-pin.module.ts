/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-location-pin',
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
          d="M15.492 9.007a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm1.992.007a5.5 5.5 0 0 0-11 0c.037.943.316 1.736.766 2.486L12 18.998l4.75-7.498c.443-.777.726-1.585.734-2.486z"
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
          d="M23.238 13.51a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm2.989.012a8.25 8.25 0 0 0-16.5 0c.055 1.414.474 2.604 1.149 3.729L18 28.498l7.125-11.247c.664-1.166 1.089-2.378 1.1-3.73z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLocationPinComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinComponent],
  exports: [IconLocationPinComponent]
})
export class IconLocationPinModule {}

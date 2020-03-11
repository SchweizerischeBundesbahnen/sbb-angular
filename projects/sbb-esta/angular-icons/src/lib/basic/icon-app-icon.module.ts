/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-app-icon',
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
        <g fill="none" fill-rule="evenodd">
          <polygon
            fill="#000"
            points="13.475 9 16.219 11.704 12.807 11.704 12.807 9 11.194 9 11.194 11.704 7.801 11.704 10.545 9 8.505 9 5 12.5 8.505 16 10.545 16 7.801 13.314 11.194 13.314 11.194 16 12.807 16 12.807 13.314 16.219 13.314 13.475 16 15.514 16 19 12.5 15.514 9"
          />
          <path
            stroke="#000"
            d="M2.5,6.3594 C2.5,4.2284 4.228,2.5004 6.359,2.5004 L17.641,2.5004 C19.772,2.5004 21.5,4.2284 21.5,6.3594 L21.5,17.6404 C21.5,19.7724 19.771,21.5004 17.641,21.5004 L6.359,21.5004 C4.228,21.5004 2.5,19.7714 2.5,17.6404 L2.5,6.3594 Z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <polygon
            fill="#000"
            points="20.212 13.5 24.328 17.556 19.21 17.556 19.21 13.5 16.79 13.5 16.79 17.556 11.701 17.556 15.817 13.5 12.757 13.5 7.499 18.75 12.757 24 15.817 24 11.701 19.971 16.79 19.971 16.79 24 19.21 24 19.21 19.971 24.328 19.971 20.212 24 23.27 24 28.499 18.75 23.27 13.5"
          />
          <path
            stroke="#000"
            d="M3.75,9.5391 C3.75,6.3426 6.342,3.7506 9.5385,3.7506 L26.4615,3.7506 C29.658,3.7506 32.25,6.3426 32.25,9.5391 L32.25,26.4606 C32.25,29.6586 29.6565,32.2506 26.4615,32.2506 L9.5385,32.2506 C6.342,32.2506 3.75,29.6571 3.75,26.4606 L3.75,9.5391 Z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAppIconComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconAppIconComponent],
  exports: [IconAppIconComponent]
})
export class IconAppIconModule {}

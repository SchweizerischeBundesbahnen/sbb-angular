import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
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
            points="13.264 9 15.616 11.318 12.692 11.318 12.692 9 11.309 9 11.309 11.318 8.401 11.318 10.753 9 9.004 9 6 12 9.004 15 10.753 15 8.401 12.698 11.309 12.698 11.309 15 12.692 15 12.692 12.698 15.616 12.698 13.264 15 15.012 15 18 12 15.012 9"
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
            points="19.896 13.5 23.424 16.977 19.038 16.977 19.038 13.5 16.964 13.5 16.964 16.977 12.601 16.977 16.129 13.5 13.506 13.5 9 18 13.506 22.5 16.129 22.5 12.601 19.047 16.964 19.047 16.964 22.5 19.038 22.5 19.038 19.047 23.424 19.047 19.896 22.5 22.518 22.5 27 18 22.518 13.5"
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAppIconComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconAppIconComponent],
  exports: [IconAppIconComponent],
})
export class IconAppIconModule {}

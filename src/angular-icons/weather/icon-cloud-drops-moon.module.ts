import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cloud-drops-moon',
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
          d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.125 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm10.175 1.304C18.636 11.9 21.51 11.208 22.5 9c-4.168 1.762-6.956-2.354-5.518-5.2-1.089.326-1.913 1-2.528 3.034M6.5 16S6 17 6 17.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm4 0s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm4 0s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm-2 2s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm-4 0S8 19 8 19.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5z"
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
          d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c4.688 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm15.262 1.957c1.892.594 6.203-.444 7.688-3.756-6.252 2.643-10.434-3.531-8.277-7.8-1.633.489-2.87 1.498-3.792 4.55M9.75 24S9 25.5 9 26.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0S15 25.5 15 26.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0S21 25.5 21 26.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-3 3S18 28.5 18 29.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-6 0S12 28.5 12 29.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudDropsMoonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudDropsMoonComponent],
  exports: [IconCloudDropsMoonComponent],
})
export class IconCloudDropsMoonModule {}

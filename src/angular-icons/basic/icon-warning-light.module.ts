import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-warning-light',
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
          d="M12.5 5V2v3zM9 6L7 4l2 2zm7 0l2-2-2 2zM8.5 17.5v-6a4 4 0 018 0v6h-8zm2-1.5v-5 5zm9 4.5h-14l1-3h12l1 3z"
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
          d="M18.75 7.5V3v4.5zM13.5 9l-3-3 3 3zM24 9l3-3-3 3zM12.75 26.25v-9a6 6 0 0112 0v9h-12zm3-2.25v-7.5V24zm13.5 6.75h-21l1.5-4.5h18l1.5 4.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWarningLightComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWarningLightComponent],
  exports: [IconWarningLightComponent],
})
export class IconWarningLightModule {}

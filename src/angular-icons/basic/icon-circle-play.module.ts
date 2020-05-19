import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-circle-play',
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
          d="M8.5 6l10 5.5-10 6V6zm13 6A9.5 9.5 0 0012 2.5 9.5 9.5 0 002.5 12a9.5 9.5 0 009.5 9.5 9.5 9.5 0 009.5-9.5z"
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
          d="M12.75 9l15 8.25-15 9V9zm19.5 9c0-7.871-6.38-14.25-14.25-14.25S3.75 10.129 3.75 18c0 7.87 6.38 14.25 14.25 14.25S32.25 25.87 32.25 18z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCirclePlayComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCirclePlayComponent],
  exports: [IconCirclePlayComponent],
})
export class IconCirclePlayModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-eye-disabled',
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
          d="M9.085 10.085C8.693 10.647 8.5 11.263 8.5 12A3.5 3.5 0 0012 15.5c.725 0 1.358-.204 1.915-.585m1.467-2.058c.069-.276.118-.56.118-.856A3.5 3.5 0 0012 8.5a3.5 3.5 0 00-.856.117M4 5l15 15m-1.343-4.91A17.304 17.304 0 0020.5 12c-.744-1.1-4.25-5.5-8.5-5.5-.86 0-1.684.182-2.46.473m-2.317 1.25C5.345 9.559 3.993 11.298 3.5 12c.744 1.1 4.25 5.5 8.5 5.5 1.273 0 2.466-.388 3.539-.961"
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
          d="M13.627 15.127c-.588.843-.877 1.767-.877 2.874 0 2.9 2.35 5.249 5.25 5.249a4.963 4.963 0 002.872-.878m2.2-3.087c.104-.414.178-.84.178-1.284 0-2.901-2.35-5.25-5.25-5.25a5.25 5.25 0 00-1.284.176M6 7.5L28.5 30m-2.014-7.366a25.955 25.955 0 004.264-4.633C29.634 16.35 24.375 9.75 18 9.75c-1.291 0-2.526.271-3.691.708m-3.475 1.875C8.017 14.338 5.991 16.947 5.25 18c1.116 1.65 6.375 8.25 12.75 8.25 1.91 0 3.699-.582 5.308-1.442"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconEyeDisabledComponent],
  exports: [IconEyeDisabledComponent],
})
export class IconEyeDisabledModule {}

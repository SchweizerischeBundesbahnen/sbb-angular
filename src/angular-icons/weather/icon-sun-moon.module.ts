import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sun-moon',
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
          d="M9 6.4c-6.9 5.3 1.8 15.9 8.9 8.7-5.9 2-10.5-4.3-8.9-8.7zm-.023 3.826C9.577 9.226 10.7 8.5 12 8.5c1.901 0 3.5 1.6 3.5 3.5 0 1.3-.744 2.56-1.844 3.158"
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
          d="M13.5 9.6c-10.35 7.95 2.7 23.85 13.35 13.05C18 25.65 11.1 16.2 13.5 9.6zm-.034 5.74c.9-1.5 2.585-2.59 4.533-2.59 2.852 0 5.25 2.4 5.25 5.25 0 1.95-1.116 3.839-2.766 4.737"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunMoonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSunMoonComponent],
  exports: [IconSunMoonComponent],
})
export class IconSunMoonModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-binoculars',
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
          d="M10.501 18c0 1.954-1.547 3.5-3.501 3.5A3.473 3.473 0 013.5 18 3.47 3.47 0 017 14.505 3.47 3.47 0 0110.501 18zm10 0c0 1.954-1.547 3.5-3.501 3.5a3.473 3.473 0 01-3.5-3.5 3.47 3.47 0 013.5-3.495A3.47 3.47 0 0120.501 18zm-5.001.001c0-.838.663-1.499 1.5-1.499m-10.001 0c-.838 0-1.499.662-1.499 1.5M3.5 18l1-8.5 2-1 1-4h3v3.537M20.501 18l-1-8.5-2-1-1-4h-3L13.5 8m-5 5A3.47 3.47 0 0112 9.504 3.47 3.47 0 0115.501 13m-5 5V9.845m3 8.155L13.5 9.845"
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
          d="M15.752 27c0 2.931-2.321 5.25-5.252 5.25A5.21 5.21 0 015.25 27c0-2.931 2.319-5.242 5.25-5.242s5.252 2.311 5.252 5.242zm15 0c0 2.931-2.321 5.25-5.252 5.25A5.21 5.21 0 0120.25 27c0-2.931 2.319-5.242 5.25-5.242s5.252 2.311 5.252 5.242zm-7.502.002c0-1.258.994-2.249 2.25-2.249m-15.002 0a2.23 2.23 0 00-2.248 2.25m-3-.003l1.5-12.75 3-1.5 1.5-6h4.5v5.306M30.752 27l-1.5-12.75-3-1.5-1.5-6h-4.5L20.25 12m-7.5 7.5c0-2.931 2.319-5.244 5.25-5.244s5.252 2.313 5.252 5.244M15.75 27V14.768M20.25 27l-.001-12.232"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBinocularsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBinocularsComponent],
  exports: [IconBinocularsComponent],
})
export class IconBinocularsModule {}

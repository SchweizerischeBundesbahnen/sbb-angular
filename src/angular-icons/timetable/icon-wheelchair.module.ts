import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wheelchair',
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
          d="M10.5 8v5.5h5V19M11 6a.5.5 0 11-1 0 .5.5 0 011 0zm-2.297 4.932A4.014 4.014 0 006.505 14.5c0 2.198 1.802 4 4 4a4.016 4.016 0 003.62-2.304"
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
          d="M15.75 12v8.25h7.5v8.25M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0zm-3.445 7.398c-1.952.994-3.297 3.024-3.297 5.352 0 3.297 2.703 6 6 6 2.39 0 4.467-1.42 5.43-3.456"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairComponent],
  exports: [IconWheelchairComponent],
})
export class IconWheelchairModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-arrows-left-right-down-up',
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
          d="M11.5 2.75v17.5m3.852-13.606L11.5 2.75 7.657 6.646m-.008 9.71l3.853 3.893 3.842-3.896M16.75 8l3.5 3.5-3.5 3.5m-10.5 0l-3.5-3.5L6.25 8m14 3.502L2.75 11.5"
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
          d="M17.25 4.125v26.25m5.779-20.409l-5.78-5.841-5.763 5.844m-.012 14.564l5.78 5.841 5.763-5.845M25.125 12l5.25 5.25-5.25 5.25m-15.75 0l-5.25-5.25L9.375 12m21 5.252l-26.25-.001"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowsLeftRightDownUpComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconArrowsLeftRightDownUpComponent],
  exports: [IconArrowsLeftRightDownUpComponent],
})
export class IconArrowsLeftRightDownUpModule {}

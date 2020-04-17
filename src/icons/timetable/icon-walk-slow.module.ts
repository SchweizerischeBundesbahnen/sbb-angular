import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-walk-slow',
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
          <path
            stroke="#000"
            d="M15.5 20v-4.5l-1-1.907h-2V16.5L12 20m2.5-11.5v5.093h-2V8.5m-1.964 5.035l-2.06 5.1-1.852-.756 1.124-2.782 1.845.752M10.5 13v-2.5l2-2h2l1 2 1.5 2m-3.501-6c-.533 0-1-.467-1-1 0-.533.467-1 1-1 .533 0 1 .467 1 1 0 .533-.467 1-1 1z"
          />
          <path
            fill="#000"
            d="M6.24 18.309a.5.5 0 110 .999.5.5 0 010-1zm1.855.749a.5.5 0 11-.001 1 .5.5 0 010-1z"
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
          <path
            stroke="#000"
            d="M23.25 30v-6.75l-1.5-2.86h-3v4.36L18 30m3.75-17.25v7.64h-3v-7.64m-2.947 7.553l-3.09 7.65-2.778-1.134 1.686-4.173 2.768 1.128M15.75 19.5v-3.75l3-3h3l1.5 3 2.25 3m-5.251-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
          />
          <path
            fill="#000"
            d="M9.36 27.463a.75.75 0 110 1.498.75.75 0 010-1.498zm2.782 1.123a.75.75 0 11-.002 1.499.75.75 0 01.002-1.499z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconWalkSlowComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWalkSlowComponent],
  exports: [IconWalkSlowComponent]
})
export class IconWalkSlowModule {}
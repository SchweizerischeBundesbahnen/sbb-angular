import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-walkie-talkie',
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
          d="M7.5 20.5h9v-14h-9v14zm0-13h-1v4h1m7-8.5v3.5m-5.5 8h6m-6 2h6m-6 2h6M13.5 10c0 .771-.727 1.5-1.498 1.5S10.5 10.771 10.5 10s.729-1.5 1.5-1.5 1.5.729 1.5 1.5z"
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
          d="M11.25 30.75h13.5v-21h-13.5v21zm0-19.5h-1.5v6h1.5M21.75 4.5v5.25m-8.25 12h9m-9 3h9m-9 3h9M20.25 15c0 1.157-1.09 2.25-2.247 2.25-1.157 0-2.253-1.093-2.253-2.25 0-1.156 1.093-2.25 2.25-2.25s2.25 1.094 2.25 2.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWalkieTalkieComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconWalkieTalkieComponent],
  exports: [IconWalkieTalkieComponent],
})
export class IconWalkieTalkieModule {}

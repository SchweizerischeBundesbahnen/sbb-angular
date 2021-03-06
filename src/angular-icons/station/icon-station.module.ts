import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-station',
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
          d="M10.6 9.3l1.9 1.7 1.9-2.4m2.1 1.9c0 2.232-1.768 4-4 4s-4-1.768-4-4 1.768-4 4-4 4 1.768 4 4zm-13-5.2v15.2h5v-2.991h8V20.5h5V5.3c-5.972-2.437-11.971-2.395-18 0z"
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
          d="M15.9 13.95l2.85 2.55 2.85-3.6m3.15 2.85c0 3.348-2.652 6-6 6s-6-2.652-6-6 2.652-6 6-6 6 2.652 6 6zm-19.5-7.8v22.8h7.5v-4.486h12v4.486h7.5V7.95c-8.958-3.655-17.956-3.593-27 0z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M5.5 11v30.5h10v-6h16v6h10V11c-11.944-4.874-23.942-4.79-36 0zm26 10.5a8 8 0 01-8 8 8 8 0 110-16 8 8 0 018 8zm-10.469-1.501l2.47 1.5 3.523-3.522M15.5 21.5H18m11 0h2.5m-8 8V27m0-13.5V16m-6.928 9.5l2.165-1.25m9.526-5.5l2.165-1.25M19.5 28.428l1.25-2.165m5.5-9.526l1.25-2.165m-8 0l1.25 2.165m5.5 9.526l1.25 2.165M16.572 17.5l2.165 1.25m9.526 5.5l2.165 1.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStationComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconStationComponent],
  exports: [IconStationComponent],
})
export class IconStationModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-container',
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
          d="M3.5 20.5h18v-9h-18v9zm3-9v9m3-9v9m3-9v9m3-9v9m3-9v9M5 11.5l7.5-4 7.5 4M13.506 3L13.5 5.063A2.001 2.001 0 0113 9a2 2 0 01-2-2"
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
          d="M5.25 30.75h27v-13.5h-27v13.5zm4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5M7.5 17.25l11.25-6 11.25 6M20.259 4.5l-.01 3.095A3 3 0 1116.5 10.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContainerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconContainerComponent],
  exports: [IconContainerComponent],
})
export class IconContainerModule {}

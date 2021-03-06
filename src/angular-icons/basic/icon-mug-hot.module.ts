import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-mug-hot',
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
          d="M15.5 18.5h3v-6h-3v6zM7.5 2c0 .6.6 1.5 1.5 1.5 1.8 0 2.1 3 0 3-.8 0-1.5.6-1.5 1.5m4-6c0 .6.6 1.5 1.5 1.5 1.8 0 2.1 3 0 3-.8 0-1.5.6-1.5 1.5m-6 12.5h10v-11h-10v11z"
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
          d="M23.25 27.75h4.5v-9h-4.5v9zM11.25 3c0 .9.9 2.25 2.25 2.25 2.7 0 3.15 4.5 0 4.5-1.2 0-2.25.9-2.25 2.25m6-9c0 .9.9 2.25 2.25 2.25 2.7 0 3.15 4.5 0 4.5-1.2 0-2.25.9-2.25 2.25m-9 18.75h15v-16.5h-15v16.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMugHotComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconMugHotComponent],
  exports: [IconMugHotComponent],
})
export class IconMugHotModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-arrow-circle',
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
          d="M19.5 5v4.5H15M19.264 14c-.81 3.283-3.614 5.5-7.264 5.5-4.35 0-7.5-3.15-7.5-7.5 0-4.348 3.15-7.5 7.5-7.5 3.37 0 6.478 2.125 7.5 5"
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
          d="M29.25 7.5v6.75H22.5m6.396 6.748C27.682 25.923 23.475 29.25 18 29.25c-6.524 0-11.25-4.725-11.25-11.25 0-6.524 4.726-11.25 11.25-11.25 5.055 0 9.717 3.186 11.25 7.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowCircleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconArrowCircleComponent],
  exports: [IconArrowCircleComponent],
})
export class IconArrowCircleModule {}

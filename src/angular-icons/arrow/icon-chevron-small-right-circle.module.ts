import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-chevron-small-right-circle',
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
          d="M13 4.5a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zm-1.675 11.404L15.275 12l-3.949-3.904"
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
          d="M19.5 6.75c6.215 0 11.25 5.037 11.25 11.25 0 6.214-5.035 11.25-11.25 11.25-6.213 0-11.25-5.036-11.25-11.25 0-6.213 5.037-11.25 11.25-11.25zm-2.512 17.106L22.913 18l-5.924-5.856"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChevronSmallRightCircleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconChevronSmallRightCircleComponent],
  exports: [IconChevronSmallRightCircleComponent],
})
export class IconChevronSmallRightCircleModule {}

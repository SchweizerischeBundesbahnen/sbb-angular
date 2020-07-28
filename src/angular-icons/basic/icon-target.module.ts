import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-target',
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
          d="M10 13.5a.5.5 0 110 1 .5.5 0 010-1zm0-2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 5.5l7-7-7 7zm4.5-4.5V6v3.5zm3.5 0h-3.5H18zm2-2h-3.5V4"
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
          d="M15 20.25a.75.75 0 110 1.5.75.75 0 010-1.5zm0-3a3.75 3.75 0 11.001 7.499A3.75 3.75 0 0115 17.25zm0-4.5a8.25 8.25 0 110 16.5 8.25 8.25 0 010-16.5zM15 21l10.5-10.5L15 21zm6.75-6.75V9v5.25zm5.25 0h-5.25H27zm3-3h-5.25V6"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTargetComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTargetComponent],
  exports: [IconTargetComponent],
})
export class IconTargetModule {}

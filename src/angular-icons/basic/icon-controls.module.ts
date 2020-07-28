import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-controls',
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
          d="M10.5 6.5c0 1.165-.835 2-2 2s-2-.835-2-2 .835-2 2-2 2 .835 2 2zm7 6c0 1.13-.869 2-2 2s-2-.87-2-2 .869-2 2-2 2 .87 2 2zm-7 6c0 1.148-.852 2-2 2-1.148 0-2-.852-2-2 0-1.147.852-2 2-2 1.148 0 2 .853 2 2zm-4-12H2h4.5zm4 0H22 10.5zm7 6H22h-4.5zm-4 0H2h11.5zm-7 6H2h4.5zm4 0H22 10.5z"
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
          d="M15.75 9.75c0 1.748-1.252 3-3 3s-3-1.252-3-3c0-1.747 1.252-3 3-3s3 1.253 3 3zm10.5 9c0 1.695-1.303 3-3 3s-3-1.305-3-3c0-1.696 1.303-3 3-3s3 1.304 3 3zm-10.5 9c0 1.722-1.278 3-3 3s-3-1.278-3-3c0-1.72 1.278-3 3-3s3 1.28 3 3zm-6-18H3h6.75zm6 0H33 15.75zm10.5 9H33h-6.75zm-6 0H3h17.25zm-10.5 9H3h6.75zm6 0H33 15.75z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconControlsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconControlsComponent],
  exports: [IconControlsComponent],
})
export class IconControlsModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-arrow-change',
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
          d="M10 8L6.49 4.5 3 8m12 8l3.51 3.5L22 16m-3.49 3.5s-.01-8.58-.01-12h0a3 3 0 10-6 0h0v9a3 3 0 11-6 0c0-3.42-.01-12-.01-12"
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
          d="M15 12L9.735 6.75 4.5 12m18 12l5.265 5.25L33 24m-5.235 5.25S27.75 16.38 27.75 11.25v-.001a4.5 4.5 0 10-8.999 0l-.001.001v13.5a4.5 4.5 0 11-9 0c0-5.13-.015-18.001-.015-18.001"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowChangeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconArrowChangeComponent],
  exports: [IconArrowChangeComponent],
})
export class IconArrowChangeModule {}

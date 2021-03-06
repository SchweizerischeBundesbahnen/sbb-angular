import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cutlery',
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
          d="M17.5 21V9.5 21zm0-17.5c1.104 0 2 1.343 2 3s-.896 3-2 3-2-1.343-2-3 .896-3 2-3zM5.5 21V9.5 21zm2-18v4.5s0 2-2 2-2-2-2-2V3m2 5V3v5zm5 4.5V21 3.5h.5c1.4 0 1.5 1.3 1.5 3v6h-2z"
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
          d="M26.25 31.5V14.25 31.5zm0-26.25c1.656 0 3 2.014 3 4.5s-1.344 4.5-3 4.5-3-2.014-3-4.5 1.344-4.5 3-4.5zm-18 26.25V14.25 31.5zm3-27v6.75s0 3-3 3-3-3-3-3V4.5m3 7.5V4.5 12zm7.5 6.75V31.5 5.25h.75c2.1 0 2.25 1.95 2.25 4.5v9h-3z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCutleryComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCutleryComponent],
  exports: [IconCutleryComponent],
})
export class IconCutleryModule {}

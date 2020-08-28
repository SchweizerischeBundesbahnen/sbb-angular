import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-heart',
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
          d="M20.2 7.776A4.977 4.977 0 0015.5 4.5a4.952 4.952 0 00-3.997 2.018A4.969 4.969 0 007.5 4.5a4.983 4.983 0 00-5.006 4.997c0 .87.22 1.687.605 2.397.22.403.48.771.792 1.096l7.61 7.61 7.598-7.6c.18-.218.606-.768.746-1.015.417-.73.655-1.58.655-2.488 0-.606-.106-1.185-.3-1.72z"
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
          d="M30.299 11.664A7.466 7.466 0 0023.25 6.75c-2.478 0-4.636 1.196-5.995 3.027C15.89 7.946 13.727 6.75 11.25 6.75a7.475 7.475 0 00-7.509 7.496c0 1.305.329 2.53.908 3.595.328.605.72 1.157 1.188 1.644L17.25 30.9 28.65 19.5c.27-.327.909-1.152 1.119-1.522a7.506 7.506 0 00.982-3.732c0-.91-.159-1.778-.451-2.582z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHeartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconHeartComponent],
  exports: [IconHeartComponent],
})
export class IconHeartModule {}

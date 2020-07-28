import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-freight-wagon',
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
          d="M3.5 15.5h17v-7h-17v7zm12-7v7m-7-7v7m-2 .503a.5.5 0 11-1 0 .5.5 0 011 0zm-4.502-1.497H3.5m16.999 0h1.502M18.5 16.003a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M5.25 23.25h25.5v-10.5H5.25v10.5zm18-10.5v10.5m-10.5-10.5v10.5m-3 .754a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM2.997 21.76H5.25m25.498 0h2.253m-5.251 2.245a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFreightWagonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconFreightWagonComponent],
  exports: [IconFreightWagonComponent],
})
export class IconFreightWagonModule {}

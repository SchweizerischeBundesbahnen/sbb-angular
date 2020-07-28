import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-thumb-up',
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
          d="M16 12.5h1.5M5.499 18.51H8.5v-8.008H5.499v8.008zM16 14.499h1.5M16 16.502h.5m1-6a1 1 0 110 2 1 1 0 110 2 1 1 0 110 2h-1a1 1 0 010 2h-5c-1.508 0-3-.5-3-3v-5h1l4.29-4.706a1.002 1.002 0 011.648 1.052L14 10.5h3.5"
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
          d="M24 18.75h2.25M8.248 27.764h4.502V15.752H8.248v12.011zM24 21.75h2.25M24 24.75h.75m1.5-9a1.5 1.5 0 110 3 1.5 1.5 0 110 3 1.5 1.5 0 110 3h-1.5a1.5 1.5 0 010 3h-7.5c-2.262 0-4.5-.75-4.5-4.5v-7.5h1.5l6.435-7.058A1.502 1.502 0 0123.25 9.75c0 .183-.032.359-.093.52L21 15.75h5.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThumbUpComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconThumbUpComponent],
  exports: [IconThumbUpComponent],
})
export class IconThumbUpModule {}

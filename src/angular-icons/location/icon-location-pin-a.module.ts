import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-location-pin-a',
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
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M17.5 10.002a5.5 5.5 0 00-11 0c.037.943.316 1.736.765 2.485l4.75 7.5 4.751-7.5c.443-.777.725-1.585.734-2.485z"
          />
          <path
            fill="#000"
            d="M13.176 10.117L11.983 6.9l-1.198 3.217h2.39zm-.653-4.119l2.728 7.007h-1.025l-.778-2.143h-2.93l-.797 2.143h-.974l2.74-7.007h1.036z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M26.25 15.003a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.148 3.728l7.125 11.248 7.126-11.248c.665-1.166 1.087-2.378 1.101-3.728z"
          />
          <path
            fill="#000"
            d="M19.764 15.176l-1.79-4.825-1.797 4.825h3.587zm-.98-6.178l4.092 10.51H21.34l-1.167-3.214h-4.395l-1.196 3.214h-1.46l4.11-10.51h1.553z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinAComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinAComponent],
  exports: [IconLocationPinAComponent],
})
export class IconLocationPinAModule {}

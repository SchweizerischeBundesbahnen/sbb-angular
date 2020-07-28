import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hand-sbb',
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
            d="M8.861 17.028L4.126 13.72a1 1 0 00-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2"
          />
          <path
            fill="#000"
            d="M10.474 4l2.745 2.704H9.807V4H8.193v2.704H4.8L7.544 4h-2.04L2 7.5 5.504 11h2.04L4.8 8.314h3.393V11h1.614V8.314h3.412L10.474 11h2.04L16 7.5 12.514 4z"
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
            d="M13.292 25.542L6.189 20.58a1.5 1.5 0 00-1.878 2.34l8.888 7.83h5.914l1.512 1.5H31.8l-7.542-7.596c-1.705-1.641-3.876-2.862-6.094-2.904H15c-2.977 0-3.048 4.5 0 4.5h3"
          />
          <path
            fill="#000"
            d="M15.711 6l4.118 4.056h-5.118V6H12.29v4.056H7.2L11.316 6h-3.06L3 11.25l5.256 5.25h3.06L7.2 12.471h5.09V16.5h2.421v-4.029h5.118L15.711 16.5h3.06L24 11.25 18.771 6z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandSbbComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHandSbbComponent],
  exports: [IconHandSbbComponent],
})
export class IconHandSbbModule {}

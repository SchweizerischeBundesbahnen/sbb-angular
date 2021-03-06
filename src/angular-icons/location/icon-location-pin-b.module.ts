import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-b',
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
            fill="#000"
            d="M10.832 10.737v2.466h1.665c.575 0 .962-.056 1.161-.168.339-.191.509-.539.509-1.044 0-.568-.229-.948-.686-1.139-.178-.077-.552-.115-1.122-.115h-1.527zm0-2.926V9.99h1.501c.412 0 .715-.03.911-.091a.863.863 0 00.468-.369 1.16 1.16 0 00.175-.637c0-.242-.051-.45-.152-.622a.837.837 0 00-.423-.369c-.152-.061-.451-.091-.897-.091h-1.583zm-.833-.804h2.537c.615 0 1.065.078 1.346.234.259.144.464.352.615.625.151.273.227.571.227.893 0 .342-.083.645-.248.91-.166.265-.394.46-.684.584.235.07.418.155.548.254.442.332.664.816.664 1.451 0 .833-.31 1.431-.928 1.796-.29.169-.673.254-1.147.254h-2.93V7.007z"
          />
          <path
            stroke="#000"
            d="M17.5 10.008a5.5 5.5 0 00-11 0c.037.943.316 1.736.766 2.485l4.75 7.499 4.75-7.499c.443-.777.726-1.585.734-2.485z"
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
            fill="#000"
            d="M16.248 16.105v3.7h2.497c.863 0 1.444-.084 1.742-.253.509-.286.764-.808.764-1.566 0-.852-.344-1.422-1.03-1.708-.267-.115-.828-.172-1.683-.172h-2.29zm0-4.389v3.269H18.5c.617 0 1.072-.045 1.366-.136.293-.097.528-.281.702-.554.174-.273.262-.591.262-.956 0-.363-.076-.675-.227-.933a1.255 1.255 0 00-.635-.553c-.228-.091-.677-.136-1.346-.136h-2.374zm-1.25-1.205h3.806c.923 0 1.598.117 2.019.35.389.216.696.528.922.938.227.41.341.857.341 1.34 0 .513-.124.967-.372 1.365-.249.397-.591.69-1.026.876.353.104.627.232.822.38.663.499.996 1.225.996 2.177 0 1.25-.465 2.146-1.392 2.694-.435.253-1.01.381-1.72.381h-4.395V10.51z"
          />
          <path
            stroke="#000"
            d="M26.25 15.012a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.149 3.727l7.125 11.249 7.125-11.248c.665-1.166 1.089-2.378 1.101-3.728z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinBComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinBComponent],
  exports: [IconLocationPinBComponent],
})
export class IconLocationPinBModule {}

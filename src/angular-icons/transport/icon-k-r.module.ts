import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-k-r',
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
          <path stroke="#000" d="M3.002 18.5h18-18zm0-13h18-18z" />
          <path
            fill="#000"
            d="M10.094 7.998l-3.136 3.164 3.43 4.837H8.185l-2.43-3.59-1.007 1.007v2.583H3V7.998h1.746v3.31l3.136-3.31h2.21zm-.747 4.107h1.542v-1.542h.884v1.542h1.547v.883h-1.547v1.542h-.884v-1.542H9.347v-.883zm4.6-4.107h3.874c.766 0 1.353.12 1.762.36.34.198.598.46.777.789.18.329.27.699.27 1.11 0 .469-.114.875-.338 1.222a1.858 1.858 0 01-.939.744c.354.087.631.285.832.59.128.195.213.397.257.609.044.21.101.694.17 1.45.051.554.13.899.235 1.034l.076.093h-1.822a1.366 1.366 0 01-.134-.433c-.027-.174-.063-.58-.106-1.215-.044-.565-.182-.957-.414-1.173-.232-.217-.626-.326-1.185-.326h-1.57v3.147h-1.746V7.998zm1.745 1.374v2.2h1.67c.535 0 .913-.077 1.132-.23.277-.193.416-.485.416-.876 0-.38-.118-.657-.356-.831-.237-.176-.61-.263-1.122-.263h-1.74z"
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
          <path stroke="#000" d="M4.502 27.751h27.002H4.502zm0-19.5h27.002H4.502z" />
          <path
            fill="#000"
            d="M15.14 11.997l-4.703 4.746 5.146 7.255h-3.307L8.63 18.613l-1.511 1.51v3.875H4.501V11.997H7.12v4.966l4.704-4.966h3.317zm-1.12 6.16h2.314v-2.313h1.326v2.313h2.32v1.325h-2.32v2.313h-1.326v-2.313H14.02v-1.325zm6.9-6.16h5.812c1.15 0 2.03.181 2.643.541.509.296.897.69 1.166 1.182.268.494.403 1.049.403 1.667 0 .702-.17 1.31-.505 1.831-.338.52-.807.893-1.409 1.116.531.13.947.428 1.248.887.192.29.32.594.386.912.066.316.151 1.04.255 2.175.076.83.195 1.348.352 1.55l.114.14h-2.733a2.048 2.048 0 01-.2-.65c-.041-.26-.095-.87-.16-1.822-.066-.847-.273-1.435-.62-1.76-.349-.325-.94-.488-1.778-.488h-2.355v4.72h-2.62V11.997zm2.619 2.06v3.3h2.503c.804 0 1.371-.115 1.7-.344.415-.29.624-.728.624-1.314 0-.569-.177-.986-.534-1.247-.356-.264-.917-.394-1.683-.394h-2.61z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconKRComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconKRComponent],
  exports: [IconKRComponent],
})
export class IconKRModule {}

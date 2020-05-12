import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-park-and-rail',
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
            d="M2.99 7.997h3.228c.544 0 .972.034 1.284.102.312.067.593.187.845.358.697.467 1.046 1.171 1.046 2.113 0 .835-.288 1.492-.865 1.97a2.239 2.239 0 01-.837.441c-.314.09-.7.134-1.16.134H4.734v2.883H2.99v-8zm1.745 1.478v2.266h1.56c.463 0 .797-.082 1.002-.246.251-.205.377-.505.377-.903 0-.402-.146-.7-.438-.898-.21-.146-.556-.219-1.034-.219H4.735zm4.678 2.63h1.542v-1.542h.884v1.542h1.548v.883h-1.548v1.542h-.884v-1.542H9.413v-.883zm4.608-4.107h3.875c.766 0 1.353.12 1.762.36.339.198.598.46.777.789.179.329.269.699.269 1.11 0 .469-.113.875-.337 1.222a1.858 1.858 0 01-.94.744c.355.087.632.285.833.59.128.195.213.397.257.609.044.21.1.694.17 1.45.05.554.13.899.235 1.034l.076.093h-1.822a1.366 1.366 0 01-.134-.433c-.027-.174-.063-.58-.106-1.215-.044-.565-.182-.957-.414-1.173-.232-.217-.626-.326-1.185-.326h-1.57v3.147H14.02V7.998zm1.746 1.374v2.2h1.669c.536 0 .914-.077 1.133-.23.277-.193.416-.485.416-.876 0-.38-.118-.657-.356-.831-.237-.176-.611-.263-1.122-.263h-1.74z"
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
            d="M4.484 11.996h4.844c.816 0 1.458.051 1.926.153.468.1.89.28 1.267.537 1.046.7 1.57 1.756 1.57 3.17 0 1.252-.433 2.237-1.298 2.954a3.358 3.358 0 01-1.256.662c-.47.133-1.051.2-1.741.2H7.103v4.325H4.484V11.996zm2.62 2.217v3.399h2.34c.694 0 1.195-.123 1.502-.369.377-.308.566-.758.566-1.355 0-.603-.22-1.051-.657-1.347-.317-.219-.834-.328-1.551-.328h-2.2zm7.015 3.944h2.313v-2.313h1.326v2.313h2.322v1.325h-2.322v2.313h-1.326v-2.313h-2.313v-1.325zm6.912-6.16h5.812c1.15 0 2.03.181 2.643.541.509.296.897.69 1.166 1.182.268.494.403 1.049.403 1.667 0 .702-.17 1.31-.505 1.831-.338.52-.807.893-1.409 1.116.531.13.947.428 1.248.887.192.29.32.594.386.912.066.316.151 1.04.255 2.175.076.83.195 1.348.352 1.55l.114.14h-2.733a2.048 2.048 0 01-.2-.65c-.041-.26-.095-.87-.16-1.822-.066-.847-.273-1.435-.62-1.76-.349-.325-.94-.488-1.778-.488H23.65v4.72h-2.62V11.997zm2.619 2.06v3.3h2.503c.804 0 1.371-.115 1.7-.344.415-.29.624-.728.624-1.314 0-.569-.177-.986-.534-1.247-.356-.264-.917-.394-1.683-.394h-2.61z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconParkAndRailComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconParkAndRailComponent],
  exports: [IconParkAndRailComponent],
})
export class IconParkAndRailModule {}

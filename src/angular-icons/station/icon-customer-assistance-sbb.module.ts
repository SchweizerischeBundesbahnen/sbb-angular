import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-customer-assistance-sbb',
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
            d="M11.5 2.5h-8v6h8V5.85l1-.85-1-1V2.5zM10 4.48H4.978m3.02 2H4.98m1.186 8.37C4.613 15.674 3.5 17.89 3.5 20.5h8c0-2.61-1.113-4.826-2.665-5.65M7.5 10.5c1.104 0 2 1.12 2 2.5s-.896 2.5-2 2.5-2-1.12-2-2.5.896-2.5 2-2.5zm7.666-3.65c-1.552.824-2.666 3.04-2.666 5.65h8.001c0-2.61-1.113-4.826-2.665-5.65M16.501 2.5c1.104 0 2 1.119 2 2.5 0 1.38-.896 2.5-2 2.5-1.105 0-2-1.12-2-2.5 0-1.381.895-2.5 2-2.5z"
          />
          <path
            fill="#000"
            d="M17 8.75l1 .937h-1.187V8.75h-.625v.937H15l1-.937h-.75L14 10l1.25 1.25H16l-1-.938h1.188v.938h.625v-.938H18l-1 .938h.75L19 10l-1.25-1.25z"
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
            d="M17.25 3.75h-12v9h12V8.774l1.5-1.274-1.5-1.5V3.75zM15 6.72H7.467m4.531 3H7.468m1.78 12.555c-2.328 1.239-3.998 4.56-3.998 8.475h12c0-3.915-1.67-7.238-3.998-8.475M11.25 15.75c1.656 0 3 1.679 3 3.75 0 2.07-1.344 3.75-3 3.75s-3-1.68-3-3.75c0-2.071 1.344-3.75 3-3.75zm11.499-5.476c-2.328 1.237-3.999 4.56-3.999 8.475h12.002c0-3.915-1.67-7.238-3.998-8.475M24.751 3.75c1.656 0 3 1.678 3 3.75 0 2.071-1.344 3.75-3 3.75-1.657 0-3-1.679-3-3.75 0-2.072 1.343-3.75 3-3.75z"
          />
          <path
            fill="#000"
            d="M25.5 13.125l1.5 1.406h-1.78v-1.406h-.938v1.406H22.5l1.5-1.406h-1.125L21 15l1.875 1.875H24l-1.5-1.407h1.782v1.407h.938v-1.407H27l-1.5 1.407h1.125L28.5 15l-1.875-1.875z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCustomerAssistanceSbbComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCustomerAssistanceSbbComponent],
  exports: [IconCustomerAssistanceSbbComponent],
})
export class IconCustomerAssistanceSbbModule {}

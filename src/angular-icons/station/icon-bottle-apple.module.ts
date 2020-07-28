import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-bottle-apple',
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
          d="M7.54 4.5H5.46a1.85 1.85 0 00-1.69 1.094C3.038 7.231 2.5 7.891 2.5 8.675v11.126c0 .938.771 1.699 1.724 1.699h4.552c.952 0 1.724-.761 1.724-1.699V8.675c0-.784-.538-1.444-1.27-3.081A1.85 1.85 0 007.54 4.5zm-5.04 14h4v-8h-4v8zm3-14h2V2.499h-2V4.5zM17 21c.608.025.879.479 2 .5 1.531 0 2.5-2 2.5-4.904 0-3.096-1.597-3.116-2.5-3.096-1.175 0-.938.5-2 .5s-.826-.5-2-.5c-.904-.02-2.5 0-2.5 3.096 0 2.904.969 4.904 2.5 4.904 1.121-.021 1.392-.475 2-.5zm2.469-10.5s-2.47.125-2.47 3.5"
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
          d="M11.31 6.75H8.19a2.775 2.775 0 00-2.535 1.641c-1.098 2.456-1.905 3.445-1.905 4.621v16.69c0 1.406 1.157 2.548 2.586 2.548h6.828c1.428 0 2.586-1.142 2.586-2.549V13.012c0-1.176-.807-2.165-1.905-4.621A2.776 2.776 0 0011.31 6.75zm-7.56 21h6v-12h-6v12zm4.5-21h3V3.748h-3V6.75zM25.5 31.5c.912.038 1.319.718 3 .75 2.297 0 3.75-3 3.75-7.356 0-4.644-2.395-4.674-3.75-4.644-1.762 0-1.407.75-3 .75s-1.239-.75-3-.75c-1.356-.03-3.75 0-3.75 4.644 0 4.356 1.453 7.356 3.75 7.356 1.681-.032 2.088-.712 3-.75zm3.703-15.75S25.5 15.938 25.5 21"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBottleAppleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconBottleAppleComponent],
  exports: [IconBottleAppleComponent],
})
export class IconBottleAppleModule {}

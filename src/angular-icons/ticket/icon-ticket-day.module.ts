import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-day',
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
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M18.5 11.5c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3zm-14-4h10v9l-10-.024V7.5zm0 2h10m-8-2V6M8 12.5h1.5m0 2.5v-4 4zm3-7.5V6v1.5z"
          />
          <path stroke-dasharray="1 1" d="M16.5 18V5" />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zm-21-6h15v13.5l-15-.036V11.25zm0 3h15m-12-3V9M12 18.75h2.25m0 3.75v-6 6zm4.5-11.25V9v2.25z"
          />
          <path stroke-dasharray="1 1" d="M24.75 27V7.5" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketDayComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketDayComponent],
  exports: [IconTicketDayComponent],
})
export class IconTicketDayModule {}

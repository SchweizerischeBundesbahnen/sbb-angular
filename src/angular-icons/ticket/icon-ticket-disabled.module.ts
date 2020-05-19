import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-ticket-disabled',
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
            d="M3 3l18 18m-1.5-1.5h-17v-14h3m16 12.5v-2.5c-1.683 0-3-1.317-3-3 0-1.682 1.317-3 3-3v-4H9"
          />
          <path stroke-dasharray="1 1" d="M16.5 13V6.017M16.5 19v-2" />
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
            d="M4.5 4.5l27 27m-2.25-2.25H3.75v-21h4.5m24 18.75v-3.75c-2.524 0-4.5-1.976-4.5-4.5 0-2.523 1.976-4.5 4.5-4.5v-6H13.5"
          />
          <path stroke-dasharray="1 1" d="M24.75 19.5V9.026m0 19.474v-3" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketDisabledComponent],
  exports: [IconTicketDisabledComponent],
})
export class IconTicketDisabledModule {}

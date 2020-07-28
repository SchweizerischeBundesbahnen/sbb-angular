import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-parking',
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
            d="M2.5 7.5h5.509L10 10.508h2a1.5 1.5 0 011.5 1.5V12v2.5h-2m-3 0h-4m7-.5A1.5 1.5 0 118.501 14 1.5 1.5 0 0111.5 14zM6 9.495h1.004L8 11m-5.5 1.592c.157-.056.324-.092.5-.092a1.5 1.5 0 110 3c-.176 0-.343-.036-.5-.092m16-3.908c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3z"
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
            d="M3.75 11.25h8.264L15 15.762h3a2.249 2.249 0 012.25 2.25V18v3.75h-3m-4.5 0h-6m10.5-.75A2.249 2.249 0 0115 23.25a2.249 2.249 0 110-4.5A2.25 2.25 0 0117.25 21zM9 14.243h1.506L12 16.5m-8.25 2.388c.236-.084.486-.138.75-.138a2.25 2.25 0 110 4.5c-.264 0-.514-.054-.75-.138m24-5.862c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5z"
          />
          <path stroke-dasharray="1 1" d="M24.75 27V7.5" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketParkingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketParkingComponent],
  exports: [IconTicketParkingComponent],
})
export class IconTicketParkingModule {}

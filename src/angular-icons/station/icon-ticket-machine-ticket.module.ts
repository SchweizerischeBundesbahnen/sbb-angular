import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-ticket-machine-ticket',
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
          d="M3.5 17.5h11v-15h-11v15zm1 4h9v-4h-9v4zm.5-17h8M12.5 7v3m-7 1.5h5v-4h-5v4zm11 6h5v-8h-5v8zm1.5-2h2m-2-2h2m-14.5 1h5v-1h-5v1z"
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
          d="M5.25 26.25h16.5V3.75H5.25v22.5zm1.5 6h13.5v-6H6.75v6zm.75-25.5h12m-.75 3.75V15m-10.5 2.25h7.5v-6h-7.5v6zm16.5 9h7.5v-12h-7.5v12zm2.25-3h3m-3-3h3m-21.75 1.5h7.5v-1.5h-7.5v1.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketMachineTicketComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketMachineTicketComponent],
  exports: [IconTicketMachineTicketComponent],
})
export class IconTicketMachineTicketModule {}

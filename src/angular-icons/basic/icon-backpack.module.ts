import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-backpack',
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
          d="M5.5 9A4.5 4.5 0 0110 4.5h4A4.5 4.5 0 0118.5 9v12.5h-13V9zm9.006-4.5L14.5 4A1.5 1.5 0 0013 2.5h-1.996a1.5 1.5 0 00-1.5 1.5l-.004.5M7.504 15a1.5 1.5 0 011.5-1.5H15a1.5 1.5 0 011.5 1.5m0 0v4.5h-9V15m1.5.5h6M13.5 17v-1.5"
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
          d="M8.25 13.5A6.75 6.75 0 0115 6.75h6a6.75 6.75 0 016.75 6.75v18.75H8.25V13.5zm13.509-6.75l-.01-.75a2.25 2.25 0 00-2.25-2.25h-2.993A2.25 2.25 0 0014.256 6l-.006.75M11.256 22.5a2.25 2.25 0 012.25-2.25H22.5a2.25 2.25 0 012.25 2.25m0 0v6.75h-13.5V22.5m2.25.75h9m-2.25 2.25v-2.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBackpackComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconBackpackComponent],
  exports: [IconBackpackComponent],
})
export class IconBackpackModule {}

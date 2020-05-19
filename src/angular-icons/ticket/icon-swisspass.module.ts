import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-swisspass',
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
          d="M18 10.5h-3m1.5 1.5V9m2 8.5h-13a2 2 0 01-2-2v-7a2 2 0 012-2h13a2 2 0 012 2v7a2 2 0 01-2 2zm-11-5c-1.357.53-2 1.5-2 3h6c0-1.5-.643-2.475-2-3h-2zm1-4a2 2 0 110 4 2 2 0 010-4z"
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
          d="M27 15.751h-4.5m2.25 2.25v-4.5m3 12.749H8.25c-1.656 0-3-1.344-3-3v-10.5c0-1.656 1.344-3 3-3h19.5c1.656 0 3 1.344 3 3v10.5c0 1.656-1.344 3-3 3zm-16.5-7.5c-2.036.795-3 2.25-3 4.5h9c0-2.25-.965-3.712-3-4.5h-3zm1.5-6a3 3 0 110 6 3 3 0 010-6z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwisspassComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSwisspassComponent],
  exports: [IconSwisspassComponent],
})
export class IconSwisspassModule {}

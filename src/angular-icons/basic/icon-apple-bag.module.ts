import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-apple-bag',
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
          d="M10.5 6.5l-.019.102L9.5 10.5m10-7l-1 14 1-14zM7 20c-.608.025-.879.479-2 .5-1.531 0-2.5-2-2.5-4.904C2.5 12.5 4.097 12.48 5 12.5c1.175 0 .938.5 2 .5s.825-.5 2-.5c.903-.02 2.5 0 2.5 3.096 0 2.904-.969 4.904-2.5 4.904-1.121-.021-1.392-.475-2-.5zm6-2.5h5.5l3-2-2-12h-8l-2 3h8l2-3M5 10.5S7 11 7 13"
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
          d="M15.75 9.75l-.028.153-1.472 5.847m15-10.5l-1.5 21 1.5-21zM10.5 30c-.912.037-1.319.718-3 .75-2.296 0-3.75-3-3.75-7.356 0-4.644 2.396-4.674 3.75-4.644 1.762 0 1.407.75 3 .75s1.238-.75 3-.75c1.354-.03 3.75 0 3.75 4.644 0 4.356-1.454 7.356-3.75 7.356-1.681-.032-2.088-.713-3-.75zm9-3.75h8.25l4.5-3-3-18h-12l-3 4.5h12l3-4.5M7.5 15.75s3 .75 3 3.75"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAppleBagComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconAppleBagComponent],
  exports: [IconAppleBagComponent],
})
export class IconAppleBagModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-route-circle-end',
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
          <path stroke="#000" d="M20.5 12.5a6 6 0 11-12 0 6 6 0 0112 0zm-12 0H3h5.5z" />
          <path fill="#000" d="M18 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0" />
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
          <path stroke="#000" d="M30.75 18.75a9 9 0 11-18 0 9 9 0 0118 0zm-18 0H4.5h8.25z" />
          <path fill="#000" d="M27 18.75a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRouteCircleEndComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconRouteCircleEndComponent],
  exports: [IconRouteCircleEndComponent],
})
export class IconRouteCircleEndModule {}

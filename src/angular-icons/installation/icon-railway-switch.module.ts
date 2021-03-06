import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-railway-switch',
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
          d="M5.5 18.5H4h1.5v-3h.002H5.5v3zm0 0h.002H5.5V20.4 18.5zm5-9H7h3.5v-3H7h3.5V4v2.5H12h-1.5v3h1.218H10.5v1.856V9.5zm-5 6H4h1.5V4v11.5zM4 6.5h1.5H4zm0 3h1.5H4zm3 2.995h2.747H7zM4 12.5h1.5H4zm9.685-6H13h.686zM7 15.495h.776H7zm3 .005h5-5zm2-3h5-5zm2-3h5-5zm2-3h5-5zm-8 12h5-5zm2.5 0v1.9-1.9zm4.5-14L5.498 18.962M21 4.5L10.497 19.448"
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
          d="M8.25 27.75v-4.5h.003-.003v4.5H6h2.25zm0 0v2.852-2.852h.003-.003zm7.5-13.5v2.784-2.784h1.827-1.827v-4.5H18h-2.25V6v3.75H10.5h5.25v4.5H10.5h5.25zm-7.5 9H6h2.25V6v17.25zM6 9.75h2.25H6zm0 4.5h2.25H6zm4.5 4.492h4.12-4.12zM6 18.75h2.25H6zm14.528-9H19.5h1.03zM10.5 23.242h1.164H10.5zm4.5.008h7.5H15zm3-4.5h7.5H18zm3-4.5h7.5H21zm3-4.5h7.5H24zm-12 18h7.5H12zm3.75 0V30.6 27.75zm6.75-21L8.247 28.443M31.5 6.75L15.745 29.172"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M20.5 11.5V8v3.5H23h-2.5v6h3-3v4.385V17.5H13h7.5v-6H13h7.5zM10.5 8v32V8zm10 27.52V40v-4.48zM8 11.5h2.5H8zm0 6h2.5H8zm0 6h2.5H8zm0 6h2.5H8zm0 6h2.5H8zm5-12h6.206H13zm1 12h11-11zm-1-6h2.29H13zm12-18h2.646H25zm-7 18h11-11zm4-6h11-11zm4-6h11-11zm4-6h11-11zm-19.5 25L30 8m-9.5 28.5L40 8"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRailwaySwitchComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconRailwaySwitchComponent],
  exports: [IconRailwaySwitchComponent],
})
export class IconRailwaySwitchModule {}

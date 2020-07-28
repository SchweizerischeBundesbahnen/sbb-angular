import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-adult-kids',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M25.501 34.5l1-9h6l1 9M9.5 10.5a2 2 0 11-.001 4.001A2 2 0 019.5 10.5zm-2 17.001v12.498m4-12.498v12.498M5.5 29.5v-12h8v12m-8-1.999h8m16.001-9a2 2 0 11-.001 4.001A2 2 0 0129.5 18.5zm-2 14v7.498m4.001-7.498v7.498m-5.778-7.498h7.556m2.222 1.999l1-9h6l1 9m-4-16a2 2 0 11-.001 4.002 2 2 0 01.001-4.002zm-2 14.001v7.498m4-7.498v7.498m-5.778-7.498h7.556M15.5 34.5l1-9H22.5l1.001 9m-4-16a2 2 0 11-.002 4.002 2 2 0 01.002-4.002zm-2 14.001v7.498m4-7.498v7.498m-5.778-7.498h7.556"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAdultKidsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconAdultKidsComponent],
  exports: [IconAdultKidsComponent],
})
export class IconAdultKidsModule {}

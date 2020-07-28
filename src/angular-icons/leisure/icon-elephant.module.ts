import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-elephant',
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
        d="M23.5 11.5h0c5.522 0 10 4.477 10 10v2c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10v-2c0-5.523 4.477-10 10-10zm-8.054 17.91a9.975 9.975 0 01-3.888 7.033 9.991 9.991 0 007.11-4.189m9.624.023a9.986 9.986 0 007.094 4.166 9.98 9.98 0 01-3.884-6.964M18 22.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0118 22.5zm11.001 0A1.5 1.5 0 1129 25.501 1.5 1.5 0 0129 22.5zm-10.332 9.754C20.613 39.272 25.25 44 29.409 44H31.5a.5.5 0 101 0v-3a.5.5 0 00-1 0h-.43c-1.4 0-4.902-3.572-2.777-8.723M17.328 13.642a7.498 7.498 0 00-13.06 7.044l1.367 3.759a7.497 7.497 0 009.494 4.519m14.54-15.322a7.498 7.498 0 0113.062 7.044l-1.37 3.759a7.496 7.496 0 01-9.493 4.519"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconElephantComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconElephantComponent],
  exports: [IconElephantComponent],
})
export class IconElephantModule {}

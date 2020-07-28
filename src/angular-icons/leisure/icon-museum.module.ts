import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-museum',
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
        d="M9.5 32.5v-16 16zm3 0v-16 16zm2 0l-2 6 2-6zm4 0v-16 16zm3.001 0v-16 16zm19-16H7.5v-4.002L24.005 9.5l16.496 2.998V16.5zm-2 16v-16 16zm-3 0v-16 16zm-2 0l2 6m5 0H7.5v-3h1v-3h31.001v3h1v3zm-11-6v-16 16zm-3.001 0v-16 16z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMuseumComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMuseumComponent],
  exports: [IconMuseumComponent],
})
export class IconMuseumModule {}

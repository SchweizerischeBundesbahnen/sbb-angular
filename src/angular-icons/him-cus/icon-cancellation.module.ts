import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-cancellation',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M10.4 11.265L8 8.865l-2.4 2.4-.865-.866L7.135 8l-2.4-2.4.865-.865L8 7.134l2.4-2.399.865.865L8.866 8l2.399 2.399z"
        />
        <path
          fill="#FFF"
          d="M7.994 2A5.997 5.997 0 002 8c0 3.312 2.682 6 5.994 6A6.003 6.003 0 0014 8c0-3.312-2.688-6-6.006-6zM8 12.8A4.799 4.799 0 013.2 8c0-2.652 2.148-4.8 4.8-4.8 2.652 0 4.8 2.148 4.8 4.8 0 2.652-2.148 4.8-4.8 4.8z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCancellationComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconCancellationComponent],
  exports: [IconCancellationComponent],
})
export class IconCancellationModule {}

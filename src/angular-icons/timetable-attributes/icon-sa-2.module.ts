import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-2',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M1 1h11.667v14H1V1zm1.296 12.727h9.074V2.273H2.296v11.454z" />
        <path
          d="M4.24 11.12l.772-.739C6.03 9.246 6.734 8.374 7.12 7.766c.385-.607.577-1.169.577-1.68 0-.774-.394-1.16-1.188-1.16-.669 0-1.277.25-1.821.756l-.093.095-.19-1.645.13-.088c.174-.089.33-.16.463-.21.13-.052.334-.113.6-.183.267-.071.643-.106 1.128-.106.833 0 1.474.198 1.929.591.452.395.679.955.679 1.681 0 .243-.022.484-.069.722-.045.238-.151.547-.317.93-.165.383-.474.913-.932 1.584-.46.672-.931 1.265-1.415 1.781l-.1.135h2.925v1.486h-5.17l-.015-1.334"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSa2Component extends IconBase {
  constructor() {
    super({ width: '14px', height: '16px', ratio: 0.875 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSa2Component],
  exports: [IconSa2Component],
})
export class IconSa2Module {}

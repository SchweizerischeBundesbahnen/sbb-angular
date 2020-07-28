import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-rr',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1 1h13.905v14H1V1zm1.264 12.727h11.377V2.273H2.264v11.454zM5.425 3.545h2.761c.845 0 1.494.2 1.953.599.458.4.685.968.685 1.705 0 1.188-.575 1.899-1.724 2.136.264.062.463.168.594.322.133.154.26.404.38.753l1.175 3.395H9.536L8.648 9.55c-.191-.623-.596-.935-1.217-.935h-.389v3.84H5.425v-8.91zm1.723 3.78h.565c.458 0 .81-.12 1.06-.362.249-.24.374-.577.374-1.006 0-.462-.109-.785-.325-.976-.215-.19-.578-.285-1.09-.285h-.69v2.627h.106v.001z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRrComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRrComponent],
  exports: [IconSaRrComponent],
})
export class IconSaRrModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-wr',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.891 9.788L2.983 7.641l-.855-1.028a3.594 3.594 0 01-.693-2.163c0-1.094.404-2.126 1.21-3.1l.2-.215L2.942 1l4.841 5.462-.006-2.068 3.742-3.392.887.953L9.084 4.97l.001 1.59 4.101-3.759.915.98-4.127 3.752 1.616.105 3.311-2.991.909.937-3.725 3.393-2.2-.144 4.145 4.674L12.322 15l-4.284-4.835-.093-.343-.106.325L2.526 15 1 13.347l3.891-3.559zM3.016 3.474c-.06.145-.103.286-.127.425a2.487 2.487 0 00-.035.406c0 .664.246 1.277.74 1.844l.51.576 1.834 2.094 1.087-.971-3.856-4.38-.134-.355-.019.361z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWrComponent extends IconBase {
  constructor() {
    super({ width: '17px', height: '16px', ratio: 1.0625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaWrComponent],
  exports: [IconSaWrComponent],
})
export class IconSaWrModule {}

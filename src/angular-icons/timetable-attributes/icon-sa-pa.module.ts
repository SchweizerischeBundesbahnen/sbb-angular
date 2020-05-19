import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-pa',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 16"
    >
      <path
        fill-rule="evenodd"
        d="M9.2 1l8.198 14H1L9.2 1zm5.346 12.6l-2.067-3.5h-6.56l-2.067 3.5h10.694z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaPaComponent extends IconBase {
  constructor() {
    super({ width: '18px', height: '16px', ratio: 1.125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaPaComponent],
  exports: [IconSaPaComponent],
})
export class IconSaPaModule {}

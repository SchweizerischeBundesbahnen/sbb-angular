import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-twitter',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M18.9 7.4c.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9-.7-.7-1.7-1.2-2.7-1.2-2 0-3.7 1.7-3.7 3.8 0 .3 0 .6.1.9-3.1-.2-5.8-1.7-7.6-4-.4.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.6 3.2-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.4 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.8 2.6 3.4 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.9-.1C4.6 19.4 6.6 20 8.7 20c6.8 0 10.5-5.8 10.5-10.8v-.5c.7-.5 1.3-1.2 1.8-1.9-.7.3-1.4.5-2.1.6z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTwitterComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTwitterComponent],
  exports: [IconTwitterComponent],
})
export class IconTwitterModule {}

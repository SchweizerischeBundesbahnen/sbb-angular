/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-linkedin',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.5 5.1c0 1.2-.9 2.1-2.3 2.1C3.9 7.2 3 6.3 3 5.1S3.9 3 5.3 3s2.2.9 2.2 2.1zM3.2 21h4V8.9h-4V21zM17.4 8.6c-2.1 0-3.1 1.2-3.6 2V8.9h-4V21h4v-6.8c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2 1.1 2 2.7V21h4v-7c.1-3.7-1.9-5.4-4.6-5.4z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLinkedinComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLinkedinComponent],
  exports: [IconLinkedinComponent]
})
export class IconLinkedinModule {}

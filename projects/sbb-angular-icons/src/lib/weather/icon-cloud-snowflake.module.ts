/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-cloud-snowflake',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M24.03 21.576c3.217-1.053 2.818-6.258-.48-6.126 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.149-.063-4.8 2.85-2.85 0-3.673 5.077-.296 6.223M17.25 16.5V27m-5.229-5.25h10.5m-8.984-3.713l7.425 7.425m-7.403 0l7.425-7.425"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSnowflakeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudSnowflakeComponent],
  exports: [IconCloudSnowflakeComponent],
})
export class IconCloudSnowflakeModule { }

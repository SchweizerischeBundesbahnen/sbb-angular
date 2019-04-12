/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-cloud-fog',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M10.8 15.3c-.348-2.913 2.819-4.473 4.8-2.85 2.25-5.1 9.6-2.55 7.95 3 3.75-.15 3.932 6.3-1.05 6.3H12c-5.05 0-4.411-6.45-1.2-6.45zm-3.3 9.45h19.49H7.5zm1.5 3h16.49H9z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudFogComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudFogComponent],
  exports: [IconCloudFogComponent],
})
export class IconCloudFogModule { }

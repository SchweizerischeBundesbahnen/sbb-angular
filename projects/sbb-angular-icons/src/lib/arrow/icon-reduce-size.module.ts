/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-reduce-size',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M24.75 24.75l6.75 6.75M24.75 30v-5.25H30"/><path stroke-dasharray="1 1" d="M21.75 3v18.75H3"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconReduceSizeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconReduceSizeComponent],
  exports: [IconReduceSizeComponent],
})
export class IconReduceSizeModule { }

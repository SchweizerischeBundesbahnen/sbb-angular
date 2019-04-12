/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-route-circle-end',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path stroke="#000" d="M30.75 18.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-18 0H4.5h8.25z"/><path fill="#000" d="M27 18.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRouteCircleEndComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconRouteCircleEndComponent],
  exports: [IconRouteCircleEndComponent],
})
export class IconRouteCircleEndModule { }

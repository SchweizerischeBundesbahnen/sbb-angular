/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-car-parking',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M30.75 27.75h-18V16.5a3.75 3.75 0 0 1 3.75-3.75H27a3.75 3.75 0 0 1 3.75 3.75v11.25zm-27-13.5h6v-7.5h-6v7.5zm3 0V31.5m6-3.75v3h4.5v-3m9.002 0v3h4.498v-3m-18-8.999H10.5m22.5 0h-2.25m0 1.5h-18m15-.001a3.001 3.001 0 0 0-6 0M17.25 24a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0zm10.5 0a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCarParkingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCarParkingComponent],
  exports: [IconCarParkingComponent],
})
export class IconCarParkingModule { }

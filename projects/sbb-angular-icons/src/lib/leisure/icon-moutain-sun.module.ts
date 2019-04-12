/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-moutain-sun',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M31.5 30.75H9L21 12l10.5 18.75zM16.695 18.727L13.5 15l-9 15.75H9m16.084-11.457L22.5 21 21 19.5 18 21l-1.683-1.683m-1.012-2.212A5.237 5.237 0 0 0 15.75 15a5.251 5.251 0 1 0-5.25 5.25"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMoutainSunComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMoutainSunComponent],
  exports: [IconMoutainSunComponent],
})
export class IconMoutainSunModule { }

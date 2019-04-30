/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-megaphone',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M10.06 20.25l9 9-3 3-4.5-4.5-1.5 1.5-4.5-4.5 4.5-4.5zm6.75 2.25c2.123-2.121 2.645-3.254 11.25-2.25l1.5-1.5-13.5-13.5-1.5 1.5c1.004 8.605-.127 9.129-2.25 11.25l4.5 4.5zm12-16.5l-4.5 4.5M22.06 3v4.5m9.75 5.25h-4.5"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMegaphoneComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMegaphoneComponent],
  exports: [IconMegaphoneComponent],
})
export class IconMegaphoneModule { }

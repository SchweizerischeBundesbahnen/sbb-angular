/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-shopping-bag-fast',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M12 15.75H3m9 3H6m4.5 3h-3m13.372-6.611l1.041-5.909a3 3 0 1 1 5.91 1.041l-1.042 5.909m-9.688-5.516L12.75 26.652l17.727 3.126 1.387-16.51-14.771-2.604z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShoppingBagFastComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShoppingBagFastComponent],
  exports: [IconShoppingBagFastComponent],
})
export class IconShoppingBagFastModule { }

/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-utilization-high',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18"><path fill="#EB0000" d="M6 5H1v6h1v6h3v-6h1V5z"/><circle cx="3.5" cy="2.5" r="1.5" fill="#EB0000"/><path fill="#EB0000" d="M13 5H8v6h1v6h3v-6h1V5z"/><circle cx="10.5" cy="2.5" r="1.5" fill="#EB0000"/><path fill="#EB0000" d="M20 5h-5v6h1v6h3v-6h1V5z"/><circle cx="17.5" cy="2.5" r="1.5" fill="#EB0000"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUtilizationHighComponent extends IconBase {
  constructor() {
    super({ width: '21px', height: '18px', ratio: 1.1666666666666667 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconUtilizationHighComponent],
  exports: [IconUtilizationHighComponent]
})
export class IconUtilizationHighModule {}

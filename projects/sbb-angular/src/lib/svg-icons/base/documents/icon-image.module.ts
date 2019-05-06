/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-image',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 17l2-7 3 6 1-3 2 4H8zm10-8v11H6V4h7l5 5zm-5 0h3.6L13 5.4V9zm4 10v-9h-5V5H7v14h10z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconImageComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconImageComponent],
  exports: [IconImageComponent]
})
export class IconImageModule {}

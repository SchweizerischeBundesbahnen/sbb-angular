/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-arrow-down-and-back',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.7 15H19v1H5.7l2.6 2.7-.7.7-3.9-3.9 3.9-3.9.7.7L5.7 15zm8.9-3.4l.7.7 3.9-3.9-3.9-3.9-.7.7L17.3 8H4v1h13.3l-2.7 2.6z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowDownAndBackComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconArrowDownAndBackComponent],
  exports: [IconArrowDownAndBackComponent],
})
export class IconArrowDownAndBackModule { }

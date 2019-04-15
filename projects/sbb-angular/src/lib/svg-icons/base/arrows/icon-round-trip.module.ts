/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-round-trip',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.4 10.3l.7-.7 3.9 3.9-3.9 3.9-.7-.7L20 14H9v-1h11l-2.6-2.7zM3.9 11H15v-1H3.9l2.7-2.7-.7-.7L2 10.5l3.9 3.9.7-.8L3.9 11z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRoundTripComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconRoundTripComponent],
  exports: [IconRoundTripComponent],
})
export class IconRoundTripModule { }

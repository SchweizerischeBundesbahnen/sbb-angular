/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-check',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.6 17.05l-4.399-4.4.699-.7 3.6 3.6 8.6-8.6.7.699-9.2 9.401z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCheckComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconCheckComponent],
  exports: [IconCheckComponent]
})
export class IconCheckModule {}

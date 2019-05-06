/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-sound',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 11h-2l-2 2H9v3h2l2 2h2v-7z"/><path d="M13 4H6v16h12V9l-5-5zm0 1.4L16.6 9H13V5.4zM7 19V5h5v5h5v9H7z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSoundComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconSoundComponent],
  exports: [IconSoundComponent]
})
export class IconSoundModule {}

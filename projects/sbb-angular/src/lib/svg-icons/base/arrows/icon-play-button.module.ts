/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-play-button',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10.5 16.5l5.8-3.1c.9-.5.9-1.2 0-1.7l-5.9-3.4c-.7-.6-1.4-.2-1.4.8v6.5c0 .9.7 1.4 1.5.9z" clip-rule="evenodd"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPlayButtonComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconPlayButtonComponent],
  exports: [IconPlayButtonComponent]
})
export class IconPlayButtonModule {}

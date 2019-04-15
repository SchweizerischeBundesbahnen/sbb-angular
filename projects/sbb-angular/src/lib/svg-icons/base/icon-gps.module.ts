/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-gps',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.5h-2c-.2-4-3.5-7.2-7.5-7.5V2h-1v2c-4 .2-7.2 3.5-7.5 7.5H2v1h2c.2 4 3.5 7.2 7.5 7.5v2h1v-2c4-.2 7.2-3.5 7.5-7.5h2v-1zM12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGpsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconGpsComponent],
  exports: [IconGpsComponent],
})
export class IconGpsModule { }

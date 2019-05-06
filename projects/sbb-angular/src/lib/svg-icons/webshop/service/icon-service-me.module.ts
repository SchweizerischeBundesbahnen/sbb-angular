/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `sbb-angular-icons` instead. */
@Component({
  selector: 'sbb-icon-service-me',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 13"><path d="M2.8 0h4.3L8 9.4 13.1 0h4.3l-2.8 13h-2.8l2.5-10.8L8.4 13H5.9l-1-10.8L2.5 13H0M20.3 0H28l-.4 2h-5.1l-.7 3.2h4.5l-.4 2h-4.6l-.7 3.8h5.1l-.4 2h-7.7"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconServiceMeComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '13px', ratio: 2.1538461538461537 });
  }
}

/** @deprecated Use `sbb-angular-icons` instead. */
@NgModule({
  declarations: [IconServiceMeComponent],
  exports: [IconServiceMeComponent]
})
export class IconServiceMeModule {}

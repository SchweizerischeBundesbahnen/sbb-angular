import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbIconModule, ɵSBB_ICON_REGISTRY_WRAPPER_PROVIDER } from '@sbb-esta/angular-core/icon';
import { SbbIconDirectiveModule } from '@sbb-esta/angular-core/icon-directive';

import { SbbUserMenu, SBB_USERMENU_SCROLL_STRATEGY_PROVIDER } from './usermenu';
import { SbbUsermenuItem } from './usermenu-item';

@NgModule({
  declarations: [SbbUserMenu, SbbUsermenuItem],
  imports: [CommonModule, SbbIconModule, OverlayModule, SbbIconDirectiveModule],
  exports: [SbbUserMenu, SbbUsermenuItem, SbbIconDirectiveModule],
  providers: [SBB_USERMENU_SCROLL_STRATEGY_PROVIDER, ɵSBB_ICON_REGISTRY_WRAPPER_PROVIDER],
})
export class SbbUsermenuModule {}

import { NgModule } from '@angular/core';

import { IconAvatarPoliceModule } from './icon-avatar-police.module';
import { IconEmployeesSbbModule } from './icon-employees-sbb.module';
import { IconKeyModule } from './icon-key.module';
import { IconPieModule } from './icon-pie.module';
import { IconTwoUsersModule } from './icon-two-users.module';
import { IconUserChangeModule } from './icon-user-change.module';
import { IconUserGroupRoundTableModule } from './icon-user-group-round-table.module';
import { IconUserGroupRowModule } from './icon-user-group-row.module';
import { IconUserGroupModule } from './icon-user-group.module';
import { IconUserHatModule } from './icon-user-hat.module';
import { IconUserHeadsetModule } from './icon-user-headset.module';
import { IconUserKeyModule } from './icon-user-key.module';
import { IconUserPlusModule } from './icon-user-plus.module';
import { IconUserTieModule } from './icon-user-tie.module';
import { IconUserModule } from './icon-user.module';

const modules = [
  IconEmployeesSbbModule,
  IconUserGroupModule,
  IconAvatarPoliceModule,
  IconKeyModule,
  IconPieModule,
  IconTwoUsersModule,
  IconUserModule,
  IconUserChangeModule,
  IconUserGroupRoundTableModule,
  IconUserGroupRowModule,
  IconUserHatModule,
  IconUserHeadsetModule,
  IconUserKeyModule,
  IconUserPlusModule,
  IconUserTieModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionUserModule {}

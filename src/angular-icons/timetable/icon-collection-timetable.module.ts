import { NgModule } from '@angular/core';

import { IconArrowChangeModule } from './icon-arrow-change.module';
import { IconAvatarTrainStaffDisabledModule } from './icon-avatar-train-staff-disabled.module';
import { IconAvatarTrainStaffModule } from './icon-avatar-train-staff.module';
import { IconClockModule } from './icon-clock.module';
import { IconHourglassModule } from './icon-hourglass.module';
import { IconLocomotiveModule } from './icon-locomotive.module';
import { IconPercentTagModule } from './icon-percent-tag.module';
import { IconPercentModule } from './icon-percent.module';
import { IconPunctualityModule } from './icon-punctuality.module';
import { IconRouteCircleEndModule } from './icon-route-circle-end.module';
import { IconRouteCircleStartModule } from './icon-route-circle-start.module';
import { IconSeatWindowModule } from './icon-seat-window.module';
import { IconSwitzerlandRouteModule } from './icon-switzerland-route.module';
import { IconTimetableModule } from './icon-timetable.module';
import { IconWalkFastModule } from './icon-walk-fast.module';
import { IconWalkSlowModule } from './icon-walk-slow.module';
import { IconWalkModule } from './icon-walk.module';
import { IconWheelchairInaccessibleModule } from './icon-wheelchair-inaccessible.module';
import { IconWheelchairPartiallyModule } from './icon-wheelchair-partially.module';
import { IconWheelchairReservationModule } from './icon-wheelchair-reservation.module';
import { IconWheelchairUncertainModule } from './icon-wheelchair-uncertain.module';
import { IconWheelchairModule } from './icon-wheelchair.module';

const modules = [
  IconPercentModule,
  IconSwitzerlandRouteModule,
  IconArrowChangeModule,
  IconAvatarTrainStaffModule,
  IconAvatarTrainStaffDisabledModule,
  IconClockModule,
  IconHourglassModule,
  IconLocomotiveModule,
  IconPercentTagModule,
  IconPunctualityModule,
  IconRouteCircleEndModule,
  IconRouteCircleStartModule,
  IconSeatWindowModule,
  IconTimetableModule,
  IconWalkModule,
  IconWalkFastModule,
  IconWalkSlowModule,
  IconWheelchairModule,
  IconWheelchairInaccessibleModule,
  IconWheelchairPartiallyModule,
  IconWheelchairReservationModule,
  IconWheelchairUncertainModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionTimetableModule {}

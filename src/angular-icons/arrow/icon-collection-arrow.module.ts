import { NgModule } from '@angular/core';

import { IconArrowCircleModule } from './icon-arrow-circle.module';
import { IconArrowLongLeftModule } from './icon-arrow-long-left.module';
import { IconArrowLongRightModule } from './icon-arrow-long-right.module';
import { IconArrowRightModule } from './icon-arrow-right.module';
import { IconArrowsCircleModule } from './icon-arrows-circle.module';
import { IconArrowsLeftRightDownUpModule } from './icon-arrows-left-right-down-up.module';
import { IconArrowsLeftRightModule } from './icon-arrows-left-right.module';
import { IconArrowsRightLeftModule } from './icon-arrows-right-left.module';
import { IconArrowsUpDownModule } from './icon-arrows-up-down.module';
import { IconChevronRightModule } from './icon-chevron-right.module';
import { IconChevronSmallDownCircleModule } from './icon-chevron-small-down-circle.module';
import { IconChevronSmallDownModule } from './icon-chevron-small-down.module';
import { IconChevronSmallLeftCircleModule } from './icon-chevron-small-left-circle.module';
import { IconChevronSmallLeftModule } from './icon-chevron-small-left.module';
import { IconChevronSmallRightCircleModule } from './icon-chevron-small-right-circle.module';
import { IconChevronSmallRightModule } from './icon-chevron-small-right.module';
import { IconChevronSmallUpCircleModule } from './icon-chevron-small-up-circle.module';
import { IconChevronSmallUpModule } from './icon-chevron-small-up.module';
import { IconIncreaseSizeModule } from './icon-increase-size.module';
import { IconReduceSizeModule } from './icon-reduce-size.module';

const modules = [
  IconArrowsCircleModule,
  IconArrowsLeftRightModule,
  IconArrowsLeftRightDownUpModule,
  IconArrowsRightLeftModule,
  IconArrowsUpDownModule,
  IconArrowCircleModule,
  IconArrowLongLeftModule,
  IconArrowLongRightModule,
  IconArrowRightModule,
  IconChevronRightModule,
  IconChevronSmallDownModule,
  IconChevronSmallDownCircleModule,
  IconChevronSmallLeftModule,
  IconChevronSmallLeftCircleModule,
  IconChevronSmallRightModule,
  IconChevronSmallRightCircleModule,
  IconChevronSmallUpModule,
  IconChevronSmallUpCircleModule,
  IconIncreaseSizeModule,
  IconReduceSizeModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionArrowModule {}

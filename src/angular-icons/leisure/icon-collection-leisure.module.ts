import { NgModule } from '@angular/core';

import { IconAdultKidsModule } from './icon-adult-kids.module';
import { IconBalloonsModule } from './icon-balloons.module';
import { IconChristmasTreeShoppingBagModule } from './icon-christmas-tree-shopping-bag.module';
import { IconElephantModule } from './icon-elephant.module';
import { IconFerrisWheelModule } from './icon-ferris-wheel.module';
import { IconHikingBootModule } from './icon-hiking-boot.module';
import { IconLeafModule } from './icon-leaf.module';
import { IconLocomotiveViaductModule } from './icon-locomotive-viaduct.module';
import { IconLucerneChapelBridgeModule } from './icon-lucerne-chapel-bridge.module';
import { IconMarketShoppingBagModule } from './icon-market-shopping-bag.module';
import { IconMountainSunModule } from './icon-mountain-sun.module';
import { IconMuseumModule } from './icon-museum.module';
import { IconMusicRockHandGestureModule } from './icon-music-rock-hand-gesture.module';
import { IconRailwayShipModule } from './icon-railway-ship.module';
import { IconSledgeSnowshoeModule } from './icon-sledge-snowshoe.module';
import { IconSoccerBallModule } from './icon-soccer-ball.module';
import { IconThreeAdultsModule } from './icon-three-adults.module';
import { IconTrainSkiModule } from './icon-train-ski.module';
import { IconTwoAdultsKidModule } from './icon-two-adults-kid.module';

const modules = [
  IconAdultKidsModule,
  IconBalloonsModule,
  IconChristmasTreeShoppingBagModule,
  IconElephantModule,
  IconFerrisWheelModule,
  IconHikingBootModule,
  IconLeafModule,
  IconLocomotiveViaductModule,
  IconLucerneChapelBridgeModule,
  IconMarketShoppingBagModule,
  IconMountainSunModule,
  IconMuseumModule,
  IconMusicRockHandGestureModule,
  IconRailwayShipModule,
  IconSledgeSnowshoeModule,
  IconSoccerBallModule,
  IconThreeAdultsModule,
  IconTrainSkiModule,
  IconTwoAdultsKidModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionLeisureModule {}

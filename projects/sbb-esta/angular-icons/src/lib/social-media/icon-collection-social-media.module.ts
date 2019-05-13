/*
 * Autogenerated by schematics
 */
import { NgModule } from '@angular/core';

import { IconTwitterModule } from './icon-twitter.module';
import { IconFacebookModule } from './icon-facebook.module';
import { IconInstagramModule } from './icon-instagram.module';
import { IconGoogleplusModule } from './icon-googleplus.module';
import { IconYoutubeModule } from './icon-youtube.module';
import { IconLinkedinModule } from './icon-linkedin.module';
import { IconPinterestModule } from './icon-pinterest.module';
import { IconXingModule } from './icon-xing.module';

const modules = [
  IconTwitterModule,
  IconFacebookModule,
  IconInstagramModule,
  IconGoogleplusModule,
  IconYoutubeModule,
  IconLinkedinModule,
  IconPinterestModule,
  IconXingModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class IconCollectionSocialMediaModule {}

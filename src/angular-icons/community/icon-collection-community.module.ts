import { NgModule } from '@angular/core';

import { IconBulbOffModule } from './icon-bulb-off.module';
import { IconBulbOnModule } from './icon-bulb-on.module';
import { IconFaceGrinningModule } from './icon-face-grinning.module';
import { IconFaceNeutralModule } from './icon-face-neutral.module';
import { IconFaceSadModule } from './icon-face-sad.module';
import { IconFaceSmilingModule } from './icon-face-smiling.module';
import { IconHandshakeModule } from './icon-handshake.module';
import { IconNetworkModule } from './icon-network.module';
import { IconOnboardingModule } from './icon-onboarding.module';
import { IconQuestionAnswerModule } from './icon-question-answer.module';
import { IconShareModule } from './icon-share.module';
import { IconSpeechBubbleGroupEmptyModule } from './icon-speech-bubble-group-empty.module';
import { IconSpeechBubbleModule } from './icon-speech-bubble.module';
import { IconThumbDownModule } from './icon-thumb-down.module';
import { IconThumbUpModule } from './icon-thumb-up.module';
import { IconTranslateModule } from './icon-translate.module';
import { IconTwoSpeechBubblesModule } from './icon-two-speech-bubbles.module';

const modules = [
  IconBulbOnModule,
  IconHandshakeModule,
  IconNetworkModule,
  IconTwoSpeechBubblesModule,
  IconBulbOffModule,
  IconFaceGrinningModule,
  IconFaceNeutralModule,
  IconFaceSadModule,
  IconFaceSmilingModule,
  IconOnboardingModule,
  IconQuestionAnswerModule,
  IconShareModule,
  IconSpeechBubbleModule,
  IconSpeechBubbleGroupEmptyModule,
  IconThumbDownModule,
  IconThumbUpModule,
  IconTranslateModule,
];

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionCommunityModule {}

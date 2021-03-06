import { NgModule } from '@angular/core';

import { IconArchiveBoxModule } from './icon-archive-box.module';
import { IconBriefcaseModule } from './icon-briefcase.module';
import { IconBrochureModule } from './icon-brochure.module';
import { IconDeskAdjustableModule } from './icon-desk-adjustable.module';
import { IconDeskModule } from './icon-desk.module';
import { IconDisplayModule } from './icon-display.module';
import { IconKeyboardModule } from './icon-keyboard.module';
import { IconLaptopSmartphoneModule } from './icon-laptop-smartphone.module';
import { IconLaptopModule } from './icon-laptop.module';
import { IconMegaphoneModule } from './icon-megaphone.module';
import { IconOfficeChairModule } from './icon-office-chair.module';
import { IconPowerPlugModule } from './icon-power-plug.module';
import { IconPrinterModule } from './icon-printer.module';
import { IconScannerModule } from './icon-scanner.module';
import { IconSmartphoneModule } from './icon-smartphone.module';
import { IconSpeakerModule } from './icon-speaker.module';
import { IconSuitcaseDisabledModule } from './icon-suitcase-disabled.module';
import { IconSuitcaseModule } from './icon-suitcase.module';
import { IconTelephoneGsmModule } from './icon-telephone-gsm.module';
import { IconTelephoneReceiverModule } from './icon-telephone-receiver.module';
import { IconWalkieTalkieModule } from './icon-walkie-talkie.module';
import { IconWeightModule } from './icon-weight.module';

const modules = [
  IconLaptopSmartphoneModule,
  IconArchiveBoxModule,
  IconBriefcaseModule,
  IconBrochureModule,
  IconDeskModule,
  IconDeskAdjustableModule,
  IconDisplayModule,
  IconKeyboardModule,
  IconLaptopModule,
  IconMegaphoneModule,
  IconOfficeChairModule,
  IconPowerPlugModule,
  IconPrinterModule,
  IconScannerModule,
  IconSmartphoneModule,
  IconSpeakerModule,
  IconSuitcaseModule,
  IconSuitcaseDisabledModule,
  IconTelephoneGsmModule,
  IconTelephoneReceiverModule,
  IconWalkieTalkieModule,
  IconWeightModule,
];

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionHardwareModule {}

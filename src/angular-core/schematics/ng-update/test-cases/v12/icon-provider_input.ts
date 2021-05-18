import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SbbIconModule, SBB_ICON_REGISTRY_PROVIDER } from '@sbb-esta/angular/icon';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SbbIconModule,
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  providers: [SBB_ICON_REGISTRY_PROVIDER],
})
export class AppModule {}

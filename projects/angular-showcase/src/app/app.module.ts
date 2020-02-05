import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@sbb-esta/angular-business/header';
import { ScrollingModule } from '@sbb-esta/angular-core/scrolling';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MapsModule } from './maps/maps.module';

@NgModule({
  declarations: [AppComponent, IntroductionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot({ baseUrl: './assets' }),
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ScrollingModule,
    HeaderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

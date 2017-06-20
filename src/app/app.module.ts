import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReCaptchaModule} from 'angular2-recaptcha';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

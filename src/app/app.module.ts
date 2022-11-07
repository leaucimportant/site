import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {
  RecaptchaV3Module,
  RECAPTCHA_LANGUAGE,
  RECAPTCHA_V3_SITE_KEY,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
    RouterModule,
    ScullyLibModule,
    RecaptchaV3Module,
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: Navigator, useValue: navigator },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchaSiteKey,
    },
    { provide: RECAPTCHA_LANGUAGE, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

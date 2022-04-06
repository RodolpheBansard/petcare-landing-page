import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageContentComponent } from './components/landing-page-content/landing-page-content.component';
import { LandingPageFeaturesComponent } from './components/landing-page-features/landing-page-features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageContentComponent,
    LandingPageFeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

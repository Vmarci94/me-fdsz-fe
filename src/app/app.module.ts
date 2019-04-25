import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SignupComponent} from './components/signup-modal/signup.component';
import {MainAppComponent} from './components/main-app/main-app.component';
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './auth/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { PageHeaderComponent } from './shared/module/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent, MainAppComponent, HomeComponent, FeedPageComponent, PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

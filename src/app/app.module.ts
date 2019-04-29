import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MainAppComponent} from './components/main-app/main-app.component';
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './auth/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {PageHeaderComponent} from './shared/module/page-header/page-header.component';
import {FeedPostComponent} from './shared/module/feed-post/feed-post.component';
import {SigninComponent} from './shared/module/modals/signin/signin.component';
import {SignupComponent} from './shared/module/modals/signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent, HomeComponent, FeedPageComponent, PageHeaderComponent, FeedPostComponent, SigninComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninComponent, SignupComponent]
})
export class AppModule {
}

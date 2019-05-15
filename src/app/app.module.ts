import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
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
import {PersonalComponent} from './components/personal/personal.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ResortPageComponent} from './components/resort-page/resort-page.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {UserCardsComponent} from './components/user-cards/user-cards.component';
import {InvalidTokenModalComponent} from './shared/module/modals/invalid-token-modal/invalid-token-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedPageComponent,
    PageHeaderComponent,
    FeedPostComponent,
    SigninComponent,
    SignupComponent,
    PersonalComponent,
    FooterComponent,
    ResortPageComponent,
    AdminPageComponent,
    UserCardsComponent,
    InvalidTokenModalComponent
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
  entryComponents: [SigninComponent, SignupComponent, InvalidTokenModalComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}

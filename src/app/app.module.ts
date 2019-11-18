import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {MainComponent} from './components/home/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './auth/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {SigninComponent} from './shared/modals/signin/signin.component';
import {SignupComponent} from './shared/modals/signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonalComponent} from './components/personal/personal.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ResortPageComponent} from './components/resort-page/resort-page.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {UserCardsComponent} from './components/user-cards/user-cards.component';
import {InvalidTokenModalComponent} from './shared/modals/invalid-token-modal/invalid-token-modal.component';
import {NewFeedComponent} from './shared/new-feed/new-feed.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {HighlightListComponent} from './components/home/highlight-list/highlight-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FeedPageComponent,
    PageHeaderComponent,
    SigninComponent,
    SignupComponent,
    PersonalComponent,
    FooterComponent,
    ResortPageComponent,
    AdminPageComponent,
    UserCardsComponent,
    InvalidTokenModalComponent,
    NewFeedComponent,
    HighlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CKEditorModule
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

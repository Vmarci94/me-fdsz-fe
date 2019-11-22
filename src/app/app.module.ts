import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './components/home/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SigninModalComponent} from './shared/signin-modal/signin-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupModalComponent} from './shared/signup-modal/signup-modal.component';
import {TokenInteceptor} from './interceptors/token.inteceptor';
import {FeedPostsPageComponent} from './components/feed-posts-page/feed-posts-page.component';
import {RecordBookComponent} from './admin/record-book/record-book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { AuthErrorModalComponent } from './shared/auth-error-modal/auth-error-modal.component';
import { PostPageComponent } from './components/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    FooterComponent,
    MainComponent,
    SigninModalComponent,
    SignupModalComponent,
    FeedPostsPageComponent,
    RecordBookComponent,
    AuthErrorModalComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInteceptor,
      multi: true
    }, MatNativeDateModule, MatDatepickerModule, MatMomentDateModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninModalComponent, SignupModalComponent, AuthErrorModalComponent],
})
export class AppModule {
}

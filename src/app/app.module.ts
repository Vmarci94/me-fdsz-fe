import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './pages/app/app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './pages/home/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SigninModalComponent} from './shared/signin-modal/signin-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupModalComponent} from './shared/signup-modal/signup-modal.component';
import {TokenIntreceptor} from './interceptors/token-intreceptor.service';
import {FeedPostsPageComponent} from './pages/feed-posts-page/feed-posts-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {AuthErrorModalComponent} from './shared/auth-error-modal/auth-error-modal.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {NgxLoadingModule} from 'ngx-loading';
import {SettingsComponent} from './pages/settings/settings.component';
import {NewPostComponent} from './pages/new-post/new-post.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {ImageUploadComponent} from './shared/image-upload/image-upload.component';
import {MessagesComponent} from './pages/messages/messages.component';
import {UserEditorComponent} from './pages/user-editor/user-editor.component';
import {InboxComponent} from './pages/inbox/inbox.component';
import {PostAdminComponent} from './pages/post-admin/post-admin.component';
import {PostEditorComponent} from './pages/post-editor/post-editor.component';
import { DateInputComponent } from './shared/date-input/date-input.component';
import { BookingComponent } from './pages/booking/booking.component';
import { RoomComponent } from './shared/room/room.component';
import { RoomSelectorComponent } from './shared/room-selector/room-selector.component';
import { TurnusListComponent } from './shared/turnus-list/turnus-list.component';
import {EditBookingComponent} from './pages/edit-booking/edit-booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    FooterComponent,
    MainComponent,
    SigninModalComponent,
    SignupModalComponent,
    FeedPostsPageComponent,
    AuthErrorModalComponent,
    PostPageComponent,
    SettingsComponent,
    NewPostComponent,
    ImageUploadComponent,
    MessagesComponent,
    UserEditorComponent,
    InboxComponent,
    PostAdminComponent,
    PostEditorComponent,
    DateInputComponent,
    BookingComponent,
    RoomComponent,
    RoomSelectorComponent,
    TurnusListComponent,
    EditBookingComponent,
    AboutUsComponent
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
    MatMomentDateModule,
    NgxLoadingModule,
    CKEditorModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntreceptor,
      multi: true
    }, MatNativeDateModule, MatDatepickerModule, MatMomentDateModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninModalComponent, SignupModalComponent, AuthErrorModalComponent],
})
export class AppModule {
}

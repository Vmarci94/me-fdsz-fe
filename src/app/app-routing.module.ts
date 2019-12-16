import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/home/main/main.component';
import {FeedPostsPageComponent} from './pages/feed-posts-page/feed-posts-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {NewPostComponent} from './pages/new-post/new-post.component';
import {MessagesComponent} from './pages/messages/messages.component';
import {InboxComponent} from './pages/inbox/inbox.component';
import {PostAdminComponent} from './pages/post-admin/post-admin.component';
import {UserEditorComponent} from './pages/user-editor/user-editor.component';
import {BookingComponent} from './pages/booking/booking.component';
import {EditBookingComponent} from './pages/edit-booking/edit-booking.component';
import {AuthService} from './services/auth.service';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'feeds', component: FeedPostsPageComponent},
  {path: 'feed/:postId', component: PostPageComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthService]},
  {path: 'new-post', component: NewPostComponent, canActivate: [AuthService]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthService]},
  {path: 'messages/:userId', component: MessagesComponent, canActivate: [AuthService]},
  {path: 'user-editor', component: UserEditorComponent, canActivate: [AuthService]},
  {path: 'inbox', component: InboxComponent, canActivate: [AuthService]},
  {path: 'post-admin', component: PostAdminComponent, canActivate: [AuthService]},
  {path: 'booking', component: BookingComponent, canActivate: [AuthService]},
  {path: 'edit-booking', component: EditBookingComponent, canActivate: [AuthService]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

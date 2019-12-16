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

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'feeds', component: FeedPostsPageComponent},
  {path: 'feed/:postId', component: PostPageComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/:userId', component: MessagesComponent},
  {path: 'user-editor', component: UserEditorComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'post-admin', component: PostAdminComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'edit-booking', component: EditBookingComponent},
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

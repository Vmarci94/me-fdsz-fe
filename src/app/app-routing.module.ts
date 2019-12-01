import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/home/main/main.component';
import {FeedPostsPageComponent} from './components/feed-posts-page/feed-posts-page.component';
import {PostPageComponent} from './components/post-page/post-page.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {MessagesComponent} from './components/messages/messages.component';
import {InboxComponent} from './components/inbox/inbox.component';
import {PostAdminComponent} from './components/post-admin/post-admin.component';
import {UserEditorComponent} from './components/user-editor/user-editor.component';
import {BookingComponent} from './components/booking/booking.component';

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

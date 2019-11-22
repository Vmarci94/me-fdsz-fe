import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/home/main/main.component';
import {FeedPostsPageComponent} from './components/feed-posts-page/feed-posts-page.component';
import {RecordBookComponent} from './admin/record-book/record-book.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'feeds', component: FeedPostsPageComponent},
  {path: 'record-book', component: RecordBookComponent},
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

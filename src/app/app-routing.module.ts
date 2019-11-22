import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/home/main/main.component';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {PersonalComponent} from './components/personal/personal.component';
import {ResortPageComponent} from './components/resort-page/resort-page.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'feeds', component: FeedPageComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'resort', component: ResortPageComponent},
  {path: 'admin', component: AdminPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

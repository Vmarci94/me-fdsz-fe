import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import {PersonalComponent} from './components/personal/personal.component';
import {ResortPageComponent} from './components/resort-page/resort-page.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'feeds', component: FeedPageComponent, canActivate: [AuthGuard]},
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

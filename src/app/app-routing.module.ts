import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import {PersonalComponent} from './components/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'feeds',
    component: FeedPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'personal',
    component: PersonalComponent
  }
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

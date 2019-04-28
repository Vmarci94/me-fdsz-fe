import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainAppComponent} from './components/main-app/main-app.component';
import {HomeComponent} from './components/home/home.component';
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: '',
    component: MainAppComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'feeds', component: FeedPageComponent, canActivate: [AuthGuard]}
    ]
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

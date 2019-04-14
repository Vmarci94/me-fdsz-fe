import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';

const routes: Routes = [
  // {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  {path: '', redirectTo: 'welcome-page', pathMatch: 'full'},
  {path: 'welcome-page', loadChildren: './welcome-page/welcome-page.module#WelcomePageModule'},
  {path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule'},
  {path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

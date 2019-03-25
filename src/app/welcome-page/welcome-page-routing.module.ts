import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomePageComponent} from './welcome-page.component';

const routes: Routes = [
  {
    path: '', component: WelcomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule {
}

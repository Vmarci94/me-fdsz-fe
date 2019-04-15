import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainAppComponent} from './components/main-app/main-app.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{
    path: '',
    component: MainAppComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponent}
    ]
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

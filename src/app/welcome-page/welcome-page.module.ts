import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {WelcomePageComponent} from './welcome-page.component';
import {WelcomePageRoutingModule} from './welcome-page-routing.module';
import {SignupComponent} from './signup-modal/signup.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePageComponent, SignupComponent]
})
export class WelcomePageModule {

}

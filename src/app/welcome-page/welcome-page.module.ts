import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {WelcomePageComponent} from './welcome-page.component';
import {WelcomePageRoutingModule} from './welcome-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    WelcomePageRoutingModule,
  ],
  declarations: [WelcomePageComponent]
})
export class WelcomePageModule {
}

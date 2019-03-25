import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {WelcomePageComponent} from './welcome-page.component';
import {WelcomePageRoutingModule} from './welcome-page-routing.module';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    WelcomePageRoutingModule,
    MatSnackBarModule
  ],
  declarations: [WelcomePageComponent]
})
export class WelcomePageModule {
}

import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {UserService} from '../../services/user.service';
import 'rxjs-compat/add/observable/of';
import {MDBModalService} from 'angular-bootstrap-md';
import {SigninModalComponent} from '../signin-modal/signin-modal.component';
import {SignupModalComponent} from '../signup-modal/signup-modal.component';
import 'rxjs-compat/add/operator/map';
import {MyModalService} from '../../services/my-modal.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private user: Observable<User>;

  constructor(private authService: AuthService,
              private localStorageService: LocalStorageService,
              private userService: UserService,
              private myModalService: MyModalService) {
  }

  ngOnInit() {
    this.authService.loggedInEmitter.subscribe(loggedStatus => {
      if (loggedStatus) {
        this.user = this.userService.callGetCurrentUser();
      }
    });
    if (this.localStorageService.getToken() != null) {
      // this.authService.loggedInEmitter.emit(true);
      this.authService.emitLoggedStatus();
    }
  }

  private signout() {
    this.userService.signout();
    this.user = Observable.of(null);
  }

  private signin() {
    this.myModalService.showSignInModal();
  }

  private isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}

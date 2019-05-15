import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {MyModalsService} from '../../../services/my-modals.service';
import 'rxjs-compat/add/observable/of';
import {User} from '../../../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private user: Observable<User>;

  constructor(private authService: AuthService,
              private modalsService: MyModalsService,
              private localStorageService: LocalStorageService,
              private userService: UserService) {
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

}

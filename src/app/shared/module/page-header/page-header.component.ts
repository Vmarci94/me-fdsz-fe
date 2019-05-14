import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {MyModalsService} from '../../../services/my-modals.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private userName: string;

  constructor(private authService: AuthService,
              private modalsService: MyModalsService,
              private localStorageService: LocalStorageService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.authService.loggedInEmitter.subscribe(loggedStatus => {
      if (loggedStatus) {
        this.userService.callGetCurrentUser().subscribe(result => {
          this.userName = result.userName;
        });
      }
    });
    if (this.localStorageService.getToken() != null) {
      // this.authService.loggedInEmitter.emit(true);
      this.authService.emitLoggedStatus();
    }
  }

}

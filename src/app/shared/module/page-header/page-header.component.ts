import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private isLogedIn: false;

  private userName: string;

  constructor(private authService: AuthService, private userService: UserService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.authService.isLogedIn.subscribe(isLogedIn => {
      this.isLogedIn = isLogedIn;
      this.userService.callGetCurrentUsername().subscribe(result => {
        this.userName = result.userName;
      });
    });
  }

  signout() {
    this.authService.emitLoggedStatus();
    this.localStorageService.deleteToken();

  }
}

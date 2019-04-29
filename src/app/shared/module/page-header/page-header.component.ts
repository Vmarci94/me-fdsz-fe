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

  private isLogedIn: boolean;

  private userName: string;

  constructor(private authService: AuthService, private userService: UserService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.isLogedIn = this.localStorageService.getToken() != null;
    this.authService.isLogedIn.subscribe(isLogedIn => this.isLogedIn = isLogedIn);
    if (this.isLogedIn) {
      this.userService.callGetCurrentUsername().subscribe(result => {
        this.userName = result.userName;
      });
    }
  }

}

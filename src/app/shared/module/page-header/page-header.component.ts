import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private isLogedIn: false;

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.authService.isLogedIn.subscribe(isLogedIn => this.isLogedIn = isLogedIn);
  }

  public getUserName(): string {
    return this.userService.callGetCurrentUsername();
  }


}

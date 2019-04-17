import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.callPreAuthToken()
      .subscribe(token => localStorage.setItem('TOKEN', token));
  }

}

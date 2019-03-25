import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {User} from '../model/user.dto';
import {UserService} from '../service/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  onLoggedin() {
    this.userService.callLoginValidation(this.user).subscribe(response => {
      if (response.status === 202) {
        localStorage.setItem('isLoggedin', 'true'); // todo ezt majd ki kell venni
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.setItem('isLoggedin', 'false');
      }
    });
  }
}

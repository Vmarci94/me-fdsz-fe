import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {LocalStorageService} from '../../services/local-storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private authService: AuthService) {
  }

  user = new User();

  ngOnInit() {
  }

  // regisztráció
  signup() {
    this.userService.callSignup(this.user).subscribe(value => {
      console.log(value);
    });
  }

  // bejelentkezés
  signin() {
    this.userService.callSignin(this.user).subscribe(tokenDTO => {
      this.localStorageService.updateToken(tokenDTO.token);
      this.authService.emitLoggedStatus();
      this.router.navigate(['feeds']);
    });
  }

  signout() {
    this.localStorageService.updateToken(null);
    this.authService.emitLoggedStatus();
  }

}

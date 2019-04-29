import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {LocalStorageService} from '../../services/local-storage.service';
import {AuthService} from '../../services/auth.service';
import {SigninComponent} from '../../shared/module/modals/signin/signin.component';
import {SignupComponent} from '../../shared/module/modals/signup/signup.component';

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

  ngOnInit() {
  }

  // regisztráció
  signup(user: User) {
    this.userService.callSignup(user).subscribe(value => {
      console.log(value);
    });
  }

  // bejelentkezés
  signin(user: User) {
    this.userService.callSignin(user).subscribe(tokenDTO => {
      this.localStorageService.updateToken(tokenDTO.token);
      this.authService.emitLoggedStatus();
      this.router.navigate(['feeds']);
    });
  }

  signout() {
    this.localStorageService.updateToken(null);
    this.authService.emitLoggedStatus();
  }

  openSigninModal() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.componentInstance.callBack.subscribe(user => this.signin(user));
  }

  openSignupModal() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.callBack.subscribe(user => this.signup(user));
  }
}

import {Component, OnInit} from '@angular/core';
import {SignupComponent} from '../signup-modal/signup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../services/user/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private userService: UserService
    // private snackBar: MatSnackBar
  ) { }

  user = new User();

  ngOnInit() {
  }

  // bejelentkezés
  signin() {
    this.userService.callSignin(this.user);
  }


  // regisztrácio
  signup() {
    this.modalService.open(SignupComponent);
    //
    //   if (localStorage.getItem('isLoggedin')) {
    //     this.snackBar.open('Ön már be van jelentkezve XYZ!', 'kijelentkezés', {
    //       duration: 3000,
    //     }).afterDismissed().subscribe(next => {
    //       this.router.navigate(['/dashboard']);
    //     });
    //   } else {
    //     this.router.navigate(['/signup']);
    //   }
  }

}

import {Component, OnInit} from '@angular/core';
import {SignupComponent} from '../signup-modal/signup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../services/user.service';
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
  ) {
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

}

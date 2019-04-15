import { Component, OnInit } from '@angular/core';
import {SignupComponent} from '../signup-modal/signup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private modalService: NgbModal,
    // private router: Router,
    // private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  // signup() {
  //   this.modalService.open(SignupComponent);
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
  // }

}

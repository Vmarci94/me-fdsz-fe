import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from './signup-modal/signup.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  signup() {
    this.modalService.open(SignupComponent);

    if (localStorage.getItem('isLoggedin')) {
      this.snackBar.open('Ön már be van jelentkezve XYZ!', 'kijelentkezés', {
        duration: 3000,
      }).afterDismissed().subscribe(next => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.router.navigate(['/signup']);
    }
  }

}

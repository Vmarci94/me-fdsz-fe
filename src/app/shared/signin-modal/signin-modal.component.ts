import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MDBModalRef} from 'angular-bootstrap-md';
import {User} from '../../model/user';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninModalComponent implements OnInit {

  private validatingForm: FormGroup;

  private user: User = new User();

  private outUser = new Subject<User>();

  private needSignupModal = new Subject<boolean>();

  constructor(public modalRef: MDBModalRef) {
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  get loginFormModalEmail(): AbstractControl | null {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword(): AbstractControl | null {
    return this.validatingForm.get('loginFormModalPassword');
  }

  private hide(): void {
    this.modalRef.hide();
  }

  private submint(): void {
    if (this.user && this.user.email && this.user.password) {
      this.outUser.next(this.user);
    }
    this.hide();
  }

  private showSignUp(): void {
    this.needSignupModal.next(true);
    this.hide();
  }
}

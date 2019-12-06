import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MDBModalRef} from 'angular-bootstrap-md';
import {User} from '../../model/user';
import {Subject} from 'rxjs';
import {Moment} from 'moment';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {

  private validatingForm: FormGroup;

  private user: User = new User();

  private outUser = new Subject<User>();

  private date = new FormControl({} as Moment);

  constructor(public modalRef: MDBModalRef) {
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      signupFormModalEmail: new FormControl('', Validators.email)
    });
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  private hide(): void {
    this.modalRef.hide();
  }

  private submint(): void {
    // egyenlőre megspórolom a validációt
    this.outUser.next(this.user);
    this.hide();
  }

  private birthDayDateChange(date: Date) {
    this.user.birthDay = date;
  }
}

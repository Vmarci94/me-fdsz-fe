import {Component, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {Subject} from 'rxjs';
import {MDBModalRef} from 'angular-bootstrap-md';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private user = new User();
  public userAction = new Subject<User>();

  constructor(private modalRef: MDBModalRef) {
  }

  ngOnInit(): void {
  }

  onSubmint() {
    if (this.user.email && this.user.password) {
      this.userAction.next(this.user);
    }
  }
}

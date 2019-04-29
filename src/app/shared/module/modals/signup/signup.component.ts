import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  callBack: EventEmitter<User> = new EventEmitter();

  private user = new User();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  signup() {
    this.callBack.emit(this.user);
  }

}

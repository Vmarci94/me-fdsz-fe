import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  callBack: EventEmitter<User> = new EventEmitter();

  private user = new User();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  signin() {
    this.callBack.emit(this.user);
  }
}

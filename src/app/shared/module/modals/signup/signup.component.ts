import {Component} from '@angular/core';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private user = new User();

  private birthDayDate: NgbDateStruct;

  constructor(private activeModal: NgbActiveModal) {
  }

  private close() {
    if (this.birthDayDate != null) {
      this.user.birthDay = new Date(this.birthDayDate.year, this.birthDayDate.month, this.birthDayDate.day);
    }
    this.activeModal.close(this.user);
  }

}

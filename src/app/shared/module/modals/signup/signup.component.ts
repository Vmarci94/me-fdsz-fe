import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../model/user';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private user = new User();

  private birthDayDate: NgbDateStruct;

  private userAction = new Subject<User>();

  constructor() {
  }

  public submint() {
    if (this.birthDayDate != null) {
      this.user.birthDay = new Date(this.birthDayDate.year, this.birthDayDate.month, this.birthDayDate.day);
    }
    this.userAction.next(this.user); //TODO csekkolni kéne, hogy mindent kitöltött az innas
  }

}

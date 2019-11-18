import {Component} from '@angular/core';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../model/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private user: User = new User();

  private birthDayDate: NgbDateStruct;

  constructor(private activeModal: NgbActiveModal, private userSercice: UserService) {
    if (this.user) {
      this.user.userName = 'TesztTeszt';
    }
  }

  public submint(): void {
    if (this.birthDayDate != null) {
      this.user.birthDay = new Date(this.birthDayDate.year, this.birthDayDate.month, this.birthDayDate.day);
    }
    this.userSercice.callSignup(this.user).subscribe(
      result => {
        this.activeModal.close(result);
      },
      err => {
        console.log('Sikertelen regisztráció!');
      }
    );
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import 'rxjs-compat/add/operator/skip';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  @Input()
  private user = new User();

  private birthDayDate: NgbDateStruct;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.callGetCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  saveChanges() {
    if (this.birthDayDate != null) {
      this.user.birthDay = new Date(this.birthDayDate.year, this.birthDayDate.month, this.birthDayDate.day);
    }
    this.userService.updateUserData(this.user).subscribe(user => this.user = user);
  }

}

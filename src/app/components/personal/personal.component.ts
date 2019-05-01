import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {NgForm} from '@angular/forms';
import 'rxjs-compat/add/operator/skip';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  @Input()
  private user = new User();

  @ViewChild('form')
  ngForm: NgForm;

  private isChanged: boolean;

  constructor(private userService: UserService) {
    this.isChanged = false;
  }

  ngOnInit() {
    this.userService.callGetCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.ngForm.form.valueChanges.skip(12).subscribe(x => {
      this.isChanged = true;
      debugger;
    });

  }

  saveChanges() {
    this.userService.updateUserData(this.user).subscribe(user => this.user = user);
  }

}

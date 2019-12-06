import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Moment} from 'moment';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  date = new FormControl({} as Moment);

  private formDisabled = true;

  private newPasswordFlag = false;

  private userData: User;
  private oldUserData: User;

  private image: File;

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit() {
    this.disableForm();
    this.userService.callGetCurrentUser();
    this.userService.emitCurrentUser().subscribe((user: User) => {
      this.userData = user;
      this.oldUserData = user;
    });
  }

  disableForm() {
    this.formDisabled = true;
    this.email.disable();
    this.date.disable();
  }

  enableForm() {
    this.formDisabled = false;
    this.email.enable();
    this.date.enable();
  }

  edit() {
    this.enableForm();
    this.oldUserData = Object.assign({}, this.userData);
  }

  cancel() {
    this.disableForm();
    this.userData = Object.assign({}, this.oldUserData);
  }

  formTouched(): boolean {
    return JSON.stringify(this.userData) !== JSON.stringify(this.oldUserData);
  }

  save() {
    this.userService.callUpdateUserData(this.userData, this.image).subscribe((user: User) => {
      this.userData = user;
      this.oldUserData = user;
      this.disableForm();
      this.userService.eventChangeCurrentUser.next(user);
    });
  }

  onImageLoad(image) {
    this.image = image;
  }

}

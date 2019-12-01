import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {FormControl, Validators} from '@angular/forms';
import {Moment} from 'moment';


@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  private email = new FormControl('', [Validators.required, Validators.email]);
  private date = new FormControl({} as Moment);
  private selectedUser: User;
  private searchTerm: '';
  private oldSelectedUser: User;
  private allUser: Observable<User[]>;
  private image: File;
  private formDisabled = true;
  private editFlag = false;


  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit() {
    this.allUser = this.userService.callGetAllUser();
    this.disableForm();
  }

  private search(searchTerm: string) {
    this.allUser = this.userService.searchUsersByName(searchTerm);
  }

  onImageLoad(image) {
    this.image = image;
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

  onClickEdit() {
    this.editFlag = !this.editFlag;
    if (this.editFlag) {
      this.enableForm();
      this.oldSelectedUser = Object.assign({}, this.selectedUser);
    } else {
      this.disableForm();
      this.selectedUser = Object.assign({}, this.oldSelectedUser);
    }
  }

  formTouched(): boolean {
    return JSON.stringify(this.selectedUser) !== JSON.stringify(this.oldSelectedUser);
  }

  delete(userId: number) {
    this.userService.delete(userId);
  }

  saveAndUpload() {
    this.userService.callUpdateUserData(this.selectedUser, this.image);
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }
}

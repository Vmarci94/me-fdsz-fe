import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-record-book',
  templateUrl: './record-book.component.html',
  styleUrls: ['./record-book.component.scss']
})
export class RecordBookComponent implements OnInit {

  private users: Observable<User[]>;
  private selectedUser: User;
  private searchTerm: '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.callGetAllUser();
  }

  private search(searchTerm: string) {
    this.users = this.userService.searchUsersByName(searchTerm);
  }


}

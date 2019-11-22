import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {

  private selectedUser: User;
  private originalCard: User;
  private editing = false;
  private searchTerm: '';
  private roles = ['ADMIN', 'CLIENT'];

  private users: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.users = this.userService.getAll();

  }

  editCard() {
    this.editing = true;
    this.originalCard = this.selectedUser;
    this.selectedUser = {...this.originalCard}; // make a copy of the object
  }

  saveCard(user: User) {
    this.userService.updateUserData(user).subscribe(value => {

      this.editing = false;
      this.getUsers();
      this.selectedUser = undefined;
      this.originalCard = undefined;
    });
  }

  cancel() {
    this.editing = false;
    this.selectedUser = this.originalCard;
    this.originalCard = undefined;
  }

  confirmDelete() {
    console.log('implement me!');
    // if (confirm(`Are you sure you want to delete user for
    //      ${this.selectedUser.firstName} ${this.selectedUser.lastName}?`)) {
    //   this.cardService.deleteCard(this.selectedUser.id).subscribe(() => {
    //     this.editing = false;
    //     this.getCards();
    //     this.selectedUser = undefined;
    //     this.originalCard = undefined;
    //   });
    // }
  }

  search(searchTerm: string) {
    this.users = this.userService.searchUsersByName(searchTerm);
  }

}

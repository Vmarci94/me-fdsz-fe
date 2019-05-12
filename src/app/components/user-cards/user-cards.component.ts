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

  selectedUser: User;
  originalCard: User;
  editing = false;
  searchTerm: '';

  currentPage = 0;
  maxPages = 0;

  users: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.users = this.userService.getAllClientUser();

    // this.cards.subscribe(r => {
    //   this.maxPages = Math.ceil(r.allResults / 5);
    //   this.currentPage = r.page;
    // });
  }

  editCard() {
    this.editing = true;
    this.originalCard = this.selectedUser;
    this.selectedUser = {...this.originalCard}; // make a copy of the object
  }

  saveCard(user: User) {
    console.log('implement me!');
    // this.cardService.addOrUpdateCard(user)
    //   .subscribe(() => {
    //     this.editing = false;
    //     this.getCards();
    //     this.selectedUser = undefined;
    //     this.originalCard = undefined;
    //   });
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
}

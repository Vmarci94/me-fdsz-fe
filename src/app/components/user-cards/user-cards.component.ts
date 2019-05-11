import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {SearchResult} from '../../model/search-result';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {

  selectedCard: User;
  originalCard: User;
  editing = false;
  searchTerm = '';

  currentPage = 0;
  maxPages = 0;

  users: Observable<SearchResult>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.users = this.userService.getAllClientUser();
    this.cards.subscribe(r => {
      this.maxPages = Math.ceil(r.allResults / 5);
      this.currentPage = r.page;
    });
  }

  editCard() {
    this.editing = true;
    this.originalCard = this.selectedCard;
    this.selectedCard = {...this.originalCard}; // make a copy of the object
  }

  saveCard(card: Card) {
    this.cardService.addOrUpdateCard(card)
      .subscribe(() => {
        this.editing = false;
        this.getCards();
        this.selectedCard = undefined;
        this.originalCard = undefined;
      });
  }

  cancel() {
    this.editing = false;
    this.selectedCard = this.originalCard;
    this.originalCard = undefined;
  }

  confirmDelete() {
    if (confirm(`Are you sure you want to delete card for
         ${this.selectedCard.firstName} ${this.selectedCard.lastName}?`)) {
      this.cardService.deleteCard(this.selectedCard.id).subscribe(() => {
        this.editing = false;
        this.getCards();
        this.selectedCard = undefined;
        this.originalCard = undefined;
      });
    }
  }
}

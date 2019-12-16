import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Turnus} from '../../model/turnus';
import {NewBooking} from '../../model/new-booking';
import {Booking} from '../../model/booking';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  private turnusList: Turnus[];
  private selectedTrurnus: Turnus;
  private newBooking = new NewBooking();
  private myBookingList: Booking[];

  constructor(private bookingService: BookingService, private userService: UserService) {
  }

  ngOnInit() {
    this.bookingService.callGetAllTurnus();
    this.bookingService.callGetAllToCurrentUser();

    this.bookingService.emitAllTurnus().subscribe((data) => {
      this.turnusList = data;
      this.selectedTrurnus = undefined;
    });
    this.bookingService.emitAllToCurrentUser().subscribe((data) => {
      this.myBookingList = data;
    });
  }

  hasSelectedRoom(): boolean {
    let hasSelected = false;

    this.selectedTrurnus.rooms.forEach((room) => {
      if (room.selected) {
        hasSelected = true;
      }
    });

    return hasSelected;
  }

  addNewBooking() {
    if (!this.hasSelectedRoom()) {
      return;
    }

    this.newBooking = new NewBooking();
    this.newBooking.turnusDTO = this.selectedTrurnus;

    this.selectedTrurnus.rooms.forEach((room) => {
      if (room.selected) {
        this.newBooking.roomList.push({
          roomNumber: room.roomNumber
        });
      }
    });

    this.bookingService.callAddNewBooking(this.newBooking);
  }

  get userAdmin() {
    return this.userService.userAdmin;
  }

  selectTurnus(turnus: Turnus) {
    this.selectedTrurnus = turnus;
  }

  deleteBooking(bookingId: number) {
    this.bookingService.callDeleteBookingById(bookingId);
  }
}

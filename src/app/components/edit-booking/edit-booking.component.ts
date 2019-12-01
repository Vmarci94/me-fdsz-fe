import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Turnus} from '../../model/turnus';
import {NewBooking} from '../../model/new-booking';
import {Booking} from '../../model/booking';
import {UserService} from '../../services/user.service';

const defaultRooms = [
  {roomNumber: 1, roomType: 'FOUR_BED', price: 10000, available: true, selected: false},
  {roomNumber: 2, roomType: 'FOUR_BED', price: 10000, available: true, selected: false},
  {roomNumber: 3, roomType: 'FOUR_BED', price: 10000, available: true, selected: false},
  {roomNumber: 4, roomType: 'FOUR_BED', price: 10000, available: true, selected: false},
  {roomNumber: 5, roomType: 'THREE_BED', price: 5000, available: true, selected: false},
  {roomNumber: 6, roomType: 'THREE_BED', price: 5000, available: true, selected: false},
  {roomNumber: 7, roomType: 'THREE_BED', price: 5000, available: true, selected: false},
  {roomNumber: 8, roomType: 'THREE_BED', price: 5000, available: true, selected: false}
];

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  private turnusList: Turnus[];
  private myBookingList: Booking[];

  private newTurnus: Turnus;

  constructor(private bookingService: BookingService, private userService: UserService) {
    this.setDefaultTurnus();
  }

  ngOnInit() {
    this.bookingService.callGetAllTurnus();
    this.bookingService.callGetAllBooking();

    this.bookingService.emitAllTurnus().subscribe((data) => {
      this.turnusList = data;
    });

    this.bookingService.emitAllBooking().subscribe((data) => {
      this.myBookingList = data;
    });
  }

  setDefaultTurnus() {
    this.newTurnus = new Turnus();
    this.newTurnus.rooms = JSON.parse(JSON.stringify(defaultRooms));
    this.newTurnus.startDate = '1969-04-20';
    this.newTurnus.endDate = '1969-04-21';
  }

  hasSelectedRoom(): boolean {
    let hasSelected = false;

    this.newTurnus.rooms.forEach((room) => {
      if (room.selected) {
        hasSelected = true;
      }
    });

    return hasSelected;
  }

  addNewTurnus() {
    if (!this.hasSelectedRoom()) {
      return;
    }
    this.bookingService.callAddNewTurnus(this.newTurnus);
    this.setDefaultTurnus();
  }

  get userAdmin() {
    return this.userService.userAdmin;
  }


  deleteBooking(bookingId: number) {
    this.bookingService.callDeleteBookingById(bookingId);
  }

  deleteTurnus(turnusId: number) {
    this.bookingService.callDeleteTurnusById(turnusId);
  }
}

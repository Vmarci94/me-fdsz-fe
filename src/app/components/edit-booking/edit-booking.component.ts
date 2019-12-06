import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Turnus} from '../../model/turnus';
import {NewBooking} from '../../model/new-booking';
import {Booking} from '../../model/booking';
import {UserService} from '../../services/user.service';

const defaultRooms = [
  {roomNumber: 1, roomType: 'FOUR_BED', available: true, selected: false},
  {roomNumber: 2, roomType: 'FOUR_BED', available: true, selected: false},
  {roomNumber: 3, roomType: 'FOUR_BED', available: true, selected: false},
  {roomNumber: 4, roomType: 'FOUR_BED', available: true, selected: false},
  {roomNumber: 5, roomType: 'THREE_BED', available: true, selected: false},
  {roomNumber: 6, roomType: 'THREE_BED', available: true, selected: false},
  {roomNumber: 7, roomType: 'THREE_BED', available: true, selected: false},
  {roomNumber: 8, roomType: 'THREE_BED', available: true, selected: false}
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

    this.setDefaultTurnus();
  }

  setDefaultTurnus() {
    this.newTurnus = new Turnus();
    this.newTurnus.rooms = JSON.parse(JSON.stringify(defaultRooms));
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
    this.bookingService.callAddNewTurnus(this.newTurnus).subscribe((turnus: Turnus) => {
      this.bookingService.callGetAllTurnus();
    });
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

  private endDateChangeHandler(endDate: Date) {
    if (endDate < this.newTurnus.startDate) {
      endDate = this.newTurnus.startDate;
    }
    this.newTurnus.endDate = endDate;
  }

}

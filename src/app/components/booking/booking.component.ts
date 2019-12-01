import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Turnus} from '../../model/turnus';
import {NewBooking} from '../../model/new-booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  private turnusList: Turnus[];
  private selectedTrurnus: Turnus;
  private newBooking = new NewBooking();

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.callGetAllTurnus().subscribe((data) => {
      this.turnusList = data;
    });
  }

  addNewBooking() {
    console.log(this.selectedTrurnus);

    this.newBooking.turnusDTO = this.selectedTrurnus;

    this.selectedTrurnus.rooms.forEach((room) => {
      if (room.selected) {
        this.newBooking.roomList.push({
          roomNumber: room.roomNumber
        });
      }
    });

    console.log(this.newBooking);
    this.bookingService.callAddNewBooking(this.newBooking);
  }

}

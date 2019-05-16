import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Turnus} from '../../model/turnus';
import {ResortService} from '../../services/resort.service';
import {Room} from '../../model/room';

@Component({
  selector: 'app-resort-page',
  templateUrl: './resort-page.component.html',
  styleUrls: ['./resort-page.component.scss']
})
export class ResortPageComponent implements OnInit {

  private yearsList: Observable<number[]>;
  private selectedYear: number;

  private turnusList: Observable<Turnus[]>;
  private selectedTurnus: Turnus;

  private roomList: Observable<Room[]>;
  private selectedRooms: Room[];

  constructor(private resortService: ResortService) {
  }

  ngOnInit() {
    this.yearsList = this.resortService.getTurnusYears();
  }

  private selectYear(year: number) {
    this.selectedYear = year;
    this.turnusList = this.resortService.getAllTurnusInYear(this.selectedYear);
  }

  private selectTurnus() {
    this.roomList = this.resortService.getAvailableRoomsToTurnus(this.selectedTurnus);
  }

  private getFormatedRoomType(roomType: string): string {
    if (roomType === 'FOUR_BED') {
      return 'négyágyas szoba';
    } else if (roomType === 'THREE_BED') {
      return 'háromágyas szoba';
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Turnus} from '../../model/turnus';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input()
  private selectedTrurnus: Turnus;
  @Input()
  private roomType: string;

  constructor() { }

  ngOnInit() {
  }

}

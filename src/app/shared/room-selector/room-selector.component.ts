import {Component, Input, OnInit} from '@angular/core';
import {Turnus} from '../../model/turnus';

@Component({
  selector: 'app-room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.scss']
})
export class RoomSelectorComponent implements OnInit {
  @Input()
  private selectedTrurnus: Turnus;

  constructor() { }

  ngOnInit() {
  }

}

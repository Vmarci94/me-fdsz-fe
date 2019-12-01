import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Turnus} from '../../model/turnus';

@Component({
  selector: 'app-turnus-list',
  templateUrl: './turnus-list.component.html',
  styleUrls: ['./turnus-list.component.scss']
})
export class TurnusListComponent implements OnInit {
  @Input()
  private turnusList: Turnus[];
  @Input()
  private selectedTrurnus: Turnus;
  @Output()
  private selectedTrurnusChange: EventEmitter<Turnus> = new EventEmitter<Turnus>();

  constructor() { }

  ngOnInit() {
  }

  selectTurnus(turnus: Turnus) {
    this.selectedTrurnus = turnus;
    this.selectedTrurnusChange.emit(this.selectedTrurnus);
  }

}

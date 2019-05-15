import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Turnus} from '../../model/turnus';
import {ResortService} from '../../services/resort.service';

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

  constructor(private resortService: ResortService) {
  }

  ngOnInit() {
    this.yearsList = this.resortService.getTurnusYears();
  }

  private selectYear(year: number) {
    this.selectedYear = year;
    this.turnusList = this.resortService.getAllTurnusInYear(this.selectedYear);
  }

}

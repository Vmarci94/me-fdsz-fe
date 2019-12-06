import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';


@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  date = new Date();

  @Input()
  private startDate: Date;
  @Input()
  private formDisabled = false;
  @Output()
  private dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
    if (this.startDate) {
      this.date = new Date(this.startDate);
    } else {
      this.date = new Date();
    }
  }

  handleDateChange(momentDate: Moment) {
    const newDate: Date = momentDate.toDate();
    this.date = newDate;
    this.dateChange.emit(newDate);
  }

}

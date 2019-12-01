import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  date = new Date('1969-04-20');

  @Input()
  private startDate = '';
  @Input()
  private formDisabled = false;
  @Output()
  private dateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    if (this.startDate) {
      this.date = new Date(this.startDate);
    }
  }

  handleDateChange(newDate: Date) {
    const dateStr = moment(newDate).format('YYYY-MM-DD');
    console.log(dateStr);
    this.dateChange.emit(dateStr);
  }

}

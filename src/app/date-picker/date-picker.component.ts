import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  @Output() dateselected = new EventEmitter<MatDatepickerInputEvent<any,any>>();
  startdate:Date;

  constructor() {
    this.startdate = new Date();
  }

  ngOnInit(): void {
  }


}

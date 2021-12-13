import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { TodoList, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  @Output() selectedDateChange = new EventEmitter<Date>();;

  service: TodolistService;
  obs: Observable<TodoList>;
  startdate:Date;

  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
    this.startdate = new Date();
  }

  ngOnInit(): void {
  }

  onDateChange(value:any) {        
    console.log(new Date(value));
    this.selectedDateChange.emit(new Date(value));
  }


}

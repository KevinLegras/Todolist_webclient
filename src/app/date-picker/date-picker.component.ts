import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TodoItem } from '../todolist.service';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  @Input('item') item!: TodoItem;
  @Output() dateselected = new EventEmitter<Date | null>();
  startdate:Date;
  serializedDate!:FormControl;
  isdateselected :boolean;
  firstdateselect : Date | null;

  constructor() {
    this.startdate = new Date();
    this.isdateselected = false;
    this.firstdateselect = null;
  }

  ngOnInit(): void {
  }

  getDateSelected() : FormControl{
    if(this.item != null){
      if(this.item.date != null){
        this.isdateselected = true;
        return new FormControl(new Date(this.item.date).toISOString());    
      }
    }
    else if(this.firstdateselect != null){
      return new FormControl(new Date(this.firstdateselect).toISOString());
    }
    return new FormControl(new Date(0).toISOString());        
  }

  get isSelected(){
    return this.isdateselected;
  }

  onDateSelected(event:Date){
    this.firstdateselect = event;
    this.isdateselected = true;
    this.dateselected.emit(event)
  }

  resetDate(date: HTMLInputElement){
    date.value = "";
    this.isdateselected = false;
    this.firstdateselect = null;
    this.dateselected.emit(null);
  }

}

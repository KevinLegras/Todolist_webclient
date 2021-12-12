import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  @ViewChild('test', {static: true}) inputdate: ElementRef;
  startdate:Date;

  constructor(inputdate:ElementRef) {
    this.startdate = new Date();
    this.inputdate = inputdate;
  }

  ngOnInit(): void {
  }

  get dateSelect():any{
    console.log(this.inputdate.nativeElement);
    return "ok";
  }  

  datechange(event:Event){
    console.log(event);
  }

}

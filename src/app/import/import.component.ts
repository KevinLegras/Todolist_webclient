import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, ChangeDetectionStrategy, Inject, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { strToTdl, TodoList, TodolistService } from '../todolist.service'; 


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportComponent implements OnInit {

  @ViewChild('inputImport') stringtodolist!: ElementRef<HTMLInputElement>;

  service: TodolistService;
  obs: Observable<TodoList>;
  jsonError :string = "";
  booljsonerror:boolean = false;
  typemsg:boolean = true;

  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
  }

  ngOnInit(): void {
  }

  replaceTdl(){
    this.jsonError = ""
    try{
      let tdl = strToTdl(this.stringtodolist.nativeElement.value);
      this.service.newIndex(tdl.items);
      this.typemsg = true;
      this.jsonError = "DONE"

    }
    catch{
      this.jsonError = "ERROR WITH JSON SENT"
      this.booljsonerror = true;
      this.typemsg = false;
    }
  }

  addTdl(){
    this.jsonError = ""
    try {
      let tdl = strToTdl(this.stringtodolist.nativeElement.value);
      for(let item of tdl.items){
        this.service = this.service.appendNewItem(item.date,item.isDone,item.label)
      }
      this.jsonError = "DONE"
      this.typemsg = true;
    }
    catch{
      this.jsonError = "ERROR WITH JSON SENT";
      this.booljsonerror = true;
      this.typemsg = false;
    }
  }

  get getError(){
    return this.booljsonerror;
  }

  get getTypeMsg(){
    return this.typemsg;
  }


}

//{"label":"TODOLIST","items":[{"label":"kevin","isDone":false,"id":0,"date":null},{"label":"test","isDone":false,"id":1,"date":null},{"label":"testdate","isDone":false,"id":2,"date":"2021-12-24T23:00:00.000Z"}]}


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  service: TodolistService;
  obs: Observable<TodoList>;
  filter: string;


  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
    this.filter = 'all';
   }

  ngOnInit(): void {
  }

  add(newtodo:any):void{
    this.service = this.service.append(newtodo);
  }

  EnabledEditing(event:any,item:TodoItem):void{
    var element = event.target.closest("li");
    element.classList.add("editing");
    var input = element.querySelector(".edit");
    input.focus();
    let service = this.service;
    input.addEventListener("focusout",function(event:Event){
      service = service.update({label:input.value},item);
      element.classList.remove("editing");
    });
  }

  nbElementLeft(listItem:any):number{
    return listItem.reduce((nbitem:number, item:TodoItem) => { return nbitem + (item.isDone ? 0 : 1);}, 0);
  }

  getItems(listItem:any):TodoItem[]{
    if (this.filter === 'all') {
      return listItem;
    }
    return listItem.filter((item: { isDone: boolean; }) => this.filter === 'done' ? item.isDone : !item.isDone);
  }

  removeChecked(listItem:any):void{
    listItem.filter((item: TodoItem) => this.service = item.isDone ? this.service.remove(item) : this.service);
  }

  toggleAllChange(listItem:any) {
    console.log('test');
    /*const check = !this.toggleAll(listItem);
    listItem.forEach((item: { isDone: boolean; }) => item.isDone = check);*/
  }

  toggleAll(listItem:any): boolean {
    return listItem.reduce((nbitem: any, item: { isDone: any; }) => nbitem && item.isDone, true);
  }
}

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

  delete(item:TodoItem){
    this.service = this.service.remove(item);
  }

  update(todoitem:Partial<TodoItem>,item: TodoItem){
    this.service = this.service.update(todoitem,item);
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
    let valuecheck = !this.toggleAll(listItem);
    listItem.forEach((item: TodoItem)=> this.service.update({isDone:valuecheck},item));
  }

  toggleAll(listItem:any): boolean {
    return listItem.reduce((nbitem: any, item: { isDone: any; }) => nbitem && item.isDone, true);
  }

  trackById(_index:number,item:TodoItem):number{
    return item.id;
  }
}

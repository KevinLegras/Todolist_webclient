import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoList, TodolistService, TodoItem } from './todolist.service';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  obs: Observable<TodoList>;
  service: TodolistService;

  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
  }

  add(newtodo:any){
    this.service = this.service.append(newtodo);
  }

  delete(item:any){
    this.service = this.service.remove(item);
  }

  update(event:TodoItem,item: any){
    this.service = this.service.update(event,item);
  }

}

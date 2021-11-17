import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  service: TodolistService;
  obs: Observable<TodoList>;


  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
   }

  ngOnInit(): void {
  }

  add(newtodo:any){
    this.service = this.service.append(newtodo);
  }

}

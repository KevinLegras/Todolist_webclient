import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() item!: TodoItem;
  @Output() updateTodoItem = new EventEmitter<Partial<TodoItem>>();
  @Output() removetodoItem = new EventEmitter<TodoItem>();


  service: TodolistService;
  obs: Observable<TodoList>;

  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
   }

  ngOnInit(): void {
  }

  update(todoitem:Partial<TodoItem>,item: TodoItem){
    this.service = this.service.update(todoitem,item);
  }

  delete(item:TodoItem){
    this.service = this.service.remove(item);
  }


  



}

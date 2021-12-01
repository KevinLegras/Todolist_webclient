import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input, ViewChild, ElementRef} from '@angular/core';
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
  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;
  
  service: TodolistService;
  obs: Observable<TodoList>;
  private editmode:boolean;
  private completed:boolean;

  constructor(todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
    this.editmode = false;
    this.completed = false;
   }

  ngOnInit(): void {
  }

  get isEditing():boolean{
    console.log('edit : ' + this.editmode);
    return this.editmode;
  }  
  set isEditing(value: boolean) {
    this.editmode = value;
    if (value) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }





}

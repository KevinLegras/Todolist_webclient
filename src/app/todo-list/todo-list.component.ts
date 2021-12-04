import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';
import { VoiceRecognitionService } from '../voice-recognition-service/voice-recognition.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [VoiceRecognitionService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  service: TodolistService;
  obs: Observable<TodoList>;
  voiceRecognitionService : VoiceRecognitionService;
  filter: string;


  constructor(todolist:TodolistService,voiceRecognition:VoiceRecognitionService) {
    this.service = todolist;
    this.obs = todolist.observable;
    this.filter = 'all';
    this.voiceRecognitionService = voiceRecognition;
    this.voiceRecognitionService.init();
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

  undoRedo(value:string){
    if(value == "Undo") {
      this.service.undo();
    }
    else {
      this.service.redo();
    }
  }  
  
  deleteAll(listItem:any){
    listItem.forEach((item:TodoItem) => { this.delete(item) });
  }

  startVoiceRecognition(){
    this.voiceRecognitionService.start();
  }

  stopVoiceRecognition(){
    this.voiceRecognitionService.stop();
  }

}

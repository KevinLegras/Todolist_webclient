import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImportComponent } from '../import/import.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { TodoList, TodolistService } from '../todolist.service';

import {tdlToString} from '../todolist.service';

export interface DialogData {
  todoliststring: string;
}

@Component({
  selector: 'app-box-utils',
  templateUrl: './box-utils.component.html',
  styleUrls: ['./box-utils.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxUtilsComponent implements OnInit {

  service: TodolistService;
  obs: Observable<TodoList>;

  constructor(public dialog: MatDialog,todolist:TodolistService) {
    this.service = todolist;
    this.obs = todolist.observable;
  }

  ngOnInit(): void {
  }

  openQRcode(listitem:TodoList) {
    this.dialog.open(QrcodeComponent, {
      data: {
        todoliststring: tdlToString(listitem),
      },
    });
  }

  openImport(listitem:TodoList) {
    this.dialog.open(ImportComponent, {
      data: {
        todoliststring: tdlToString(listitem),
      },
    });
  }


}

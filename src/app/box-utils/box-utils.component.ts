import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { ShareComponent } from '../share/share.component';
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

  openShare(listitem:TodoList) {
    const dialogRef = this.dialog.open(ShareComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../box-utils/box-utils.component';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrcodeComponent implements OnInit {

  listitemtostring : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.listitemtostring = data.todoliststring;
  }

  ngOnInit(): void {
  }

}

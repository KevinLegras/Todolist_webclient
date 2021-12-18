import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

//drag&drop
import { DragDropModule } from '@angular/cdk/drag-drop';

//datepicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerModule } from './date-picker/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BoxUtilsComponent } from './box-utils/box-utils.component';
import { ShareComponent } from './share/share.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    DatePickerComponent,
    QrcodeComponent,
    BoxUtilsComponent,
    ShareComponent,
    ImportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DatePickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    QRCodeModule,
    DragDropModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

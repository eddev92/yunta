import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table.component';

@NgModule({
	declarations: [
	],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [TableComponent]
})

export class TableModule {}
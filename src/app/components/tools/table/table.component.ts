import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component ({
	selector: 'table',
	templateUrl: 'table.html',
	styleUrls:   ['table.component.css']
})

export class TableComponent implements OnInit{
	packages: any [];

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		 this.http.get('assets/mocks/paquetes.json').subscribe((res: any) =>{
		 	console.log(res)
		 });
	}
}
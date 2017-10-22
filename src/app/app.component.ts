import { Component, OnInit } from '@angular/core';
import { AppService, IMessage } from './app.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exito = '{EXITO}';
  message: IMessage = {};

  	constructor(private appService: AppService) {}

  	ngOnInit() {

  	}

  	public sendEmail(formContact: NgForm) {
  		this.message = formContact.value;
    this.appService.sendEmail(this.message).subscribe(res => {
      console.log('envio exitoso', res);
    }, error => {
      console.log('fallo al enviar', error);
    })
    console.log(this.message)
  }
  
}

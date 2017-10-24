import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  email?: string;
  mensaje?: string;
  name?: string;
  telefono?: any;
}

@Injectable()
export class AppService {
  emailUrl = 'assets/phpmail/sendmail.php';

  constructor(private http: Http) {

  }

  sendEmail(message: any): Observable<any> | any {
    console.log(message)
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }
}

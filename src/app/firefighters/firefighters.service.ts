import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FirefightersService {

  constructor(private http: Http) { }

  //get all firefighters
  getAllFirefighters() {
    return this.http.get('/api/firefighters')
      .map( res => res.json());
  }
}

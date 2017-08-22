import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Firefighter } from './firefighter/firefighter.model';

@Injectable()
export class FirefightersService {
  private firefighters: Firefighter[] = [];

  constructor(private http: Http) { }

  // Get all firefighters
  getAllFirefighters() {
    return this.http.get('/api/firefighters')
      .map((response: Response) => {
        const firefighters = response.json();
        const transformedFirefighters: Firefighter[] = [];
        for (const firefighter of firefighters) {
          transformedFirefighters.push(new Firefighter(
            firefighter._id,
            firefighter.number,
            firefighter.rank,
            firefighter.name,
            firefighter.qualifications));
        }
        this.firefighters = transformedFirefighters;
        return transformedFirefighters;
      });
  }
}

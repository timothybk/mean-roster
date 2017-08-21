import { Component, OnInit } from '@angular/core';
import { FirefightersService } from './firefighters.service';
import { Firefighter } from './firefighter/firefighter.model';


@Component({
  selector: 'app-firefighters',
  templateUrl: './firefighters.component.html',
  styleUrls: ['./firefighters.component.css']
})
export class FirefightersComponent implements OnInit {

  firefighters: Firefighter[] = [];

  constructor(private firefightersService: FirefightersService) { }

  ngOnInit() {
    this.firefightersService.getAllFirefighters()
      .subscribe(
      firefighters => {
        this.firefighters = firefighters;
      },
      err => {
        console.log(err);
      }
      );
  }

}

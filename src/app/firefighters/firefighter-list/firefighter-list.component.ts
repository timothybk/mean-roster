import { Firefighter } from './../firefighter.model';
import { FirefightersService } from './../firefighters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firefighter-list',
  templateUrl: './firefighter-list.component.html',
  styleUrls: ['./firefighter-list.component.css']
})
export class FirefighterListComponent implements OnInit {

  firefighters: Firefighter[];

  constructor(private firefightersService: FirefightersService) { }

  ngOnInit() {
    this.firefightersService.firefighters
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

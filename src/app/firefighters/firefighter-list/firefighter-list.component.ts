import { Firefighter } from './../firefighter.model';
import { FirefightersService } from './../firefighters.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firefighter-list',
  templateUrl: './firefighter-list.component.html',
  styleUrls: ['./firefighter-list.component.css']
})
export class FirefighterListComponent implements OnInit {

  firefighters: Firefighter[];

  constructor(private firefightersService: FirefightersService,
    private router: Router,
    private route: ActivatedRoute) { }

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

  onNewFireFighter() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

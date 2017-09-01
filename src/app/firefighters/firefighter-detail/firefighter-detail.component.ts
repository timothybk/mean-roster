import { Firefighter } from './../firefighter.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirefightersService } from './../firefighters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firefighter-detail',
  templateUrl: './firefighter-detail.component.html',
  styleUrls: ['./firefighter-detail.component.css']
})
export class FirefighterDetailComponent implements OnInit {
  firefighter: Firefighter;
  index: number;

  constructor(private fireFightersService: FirefightersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.fireFightersService.firefighters
          .subscribe(
            (firefighters: Firefighter[]) => {
              this.firefighter = firefighters[this.index];
            });
        console.log(this.firefighter);
      }
    );
  }

}

import { Firefighter } from './../firefighter.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirefightersService } from './../firefighters.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-firefighter-detail',
  templateUrl: './firefighter-detail.component.html',
  styleUrls: ['./firefighter-detail.component.css']
})
export class FirefighterDetailComponent implements OnInit, OnDestroy {
  firefighter: Firefighter;
  index: number;
  subscription: Subscription;

  constructor(private fireFightersService: FirefightersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.subscription = this.fireFightersService.firefighters
          .subscribe(
            (firefighters: Firefighter[]) => {
              this.firefighter = firefighters[this.index];
            });
        console.log(this.firefighter);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Subscription } from 'rxjs/Rx';
import { Firefighter } from './../firefighter.model';
import { FirefightersService } from './../firefighters.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firefighter-list',
  templateUrl: './firefighter-list.component.html',
  styleUrls: ['./firefighter-list.component.css']
})
export class FirefighterListComponent implements OnInit, OnDestroy {

  firefighters: Firefighter[];
  subscription: Subscription;

  constructor(private firefightersService: FirefightersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.firefightersService.firefighters
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

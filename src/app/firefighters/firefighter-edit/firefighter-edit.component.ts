import { Subscription } from 'rxjs/subscription';
import { Firefighter } from './../firefighter.model';
import { FirefightersService } from './../firefighters.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-firefighter-edit',
  templateUrl: './firefighter-edit.component.html',
  styleUrls: ['./firefighter-edit.component.css']
})
export class FirefighterEditComponent implements OnInit {
  id: number;
  editMode = false;
  firefighterForm: FormGroup;
  subscription: Subscription;
  firefighter: Firefighter;

  constructor(private route: ActivatedRoute,
    private firefightersService: FirefightersService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        // this.initForm();
      }
      );
  }

  // private initForm() {
  //   let firefighterNumber: number;
  //   let firefighterRank = '';
  //   let firefighterName = '';
  //   const firefighterQualifications = new FormArray([]);

  //   if (this.editMode) {
  //     this.subscription = this.firefightersService.firefighters
  //       .subscribe(
  //       (firefighters: Firefighter[]) => {
  //         this.firefighter = firefighters[this.id];
  //       }
  //       );

  //     firefighterNumber = this.firefighter.number;
  //     firefighterRank = this.firefighter.rank;
  //     firefighterName = this.firefighter.name;
  //     if (this.firefighter['qualifications']) {
  //       for (const qualification of this.firefighter.qualifications) {

  //       )
  //       }
  //     }
  //     firefighterQualifications.push(this.firefighter.qualifications);


  //   }

}

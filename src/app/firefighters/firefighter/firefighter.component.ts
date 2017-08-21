import { Component, OnInit, Input } from '@angular/core';
import { Firefighter } from "./firefighter.model";

@Component({
  selector: 'app-firefighter',
  templateUrl: './firefighter.component.html',
  styleUrls: ['./firefighter.component.css']
})
export class FirefighterComponent implements OnInit {

  @Input() firefighter: Firefighter;

  constructor() { }

  ngOnInit() {
  }

}

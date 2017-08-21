import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firefighter',
  templateUrl: './firefighter.component.html',
  styleUrls: ['./firefighter.component.css']
})
export class FirefighterComponent implements OnInit {

  @Input() firefighter: {};

  constructor() { }

  ngOnInit() {
  }

}

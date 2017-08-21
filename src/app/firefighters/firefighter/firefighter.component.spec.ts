import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefighterComponent } from './firefighter.component';

describe('FirefighterComponent', () => {
  let component: FirefighterComponent;
  let fixture: ComponentFixture<FirefighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

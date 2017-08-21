import { TestBed, inject } from '@angular/core/testing';

import { FirefightersService } from './firefighters.service';

describe('FirefightersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirefightersService]
    });
  });

  it('should be created', inject([FirefightersService], (service: FirefightersService) => {
    expect(service).toBeTruthy();
  }));
});

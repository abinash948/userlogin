import { TestBed } from '@angular/core/testing';

import { MarkerinfoService } from './markerinfo.service';

describe('MarkerinfoService', () => {
  let service: MarkerinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

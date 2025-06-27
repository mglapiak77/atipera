import { TestBed } from '@angular/core/testing';

import { PeriodicsService } from './periodics.service';

describe('PeriodicsService', () => {
  let service: PeriodicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

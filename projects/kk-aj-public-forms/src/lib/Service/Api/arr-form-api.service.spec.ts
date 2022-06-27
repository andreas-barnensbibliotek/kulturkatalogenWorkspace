import { TestBed } from '@angular/core/testing';

import { ArrFormApiService } from './arr-form-api.service';

describe('ArrFormApiService', () => {
  let service: ArrFormApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrFormApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AjApiService } from './aj-api.service';

describe('AjApiService', () => {
  let service: AjApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

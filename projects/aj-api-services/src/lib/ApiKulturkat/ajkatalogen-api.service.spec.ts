import { TestBed } from '@angular/core/testing';

import { AjkatalogenApiService } from './ajkatalogen-api.service';

describe('AjkatalogenApiService', () => {
  let service: AjkatalogenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjkatalogenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

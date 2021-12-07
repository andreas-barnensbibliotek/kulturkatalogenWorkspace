import { TestBed } from '@angular/core/testing';

import { AjApiServicesService } from './aj-api-services.service';

describe('AjApiServicesService', () => {
  let service: AjApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

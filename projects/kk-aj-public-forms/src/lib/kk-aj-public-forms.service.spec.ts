import { TestBed } from '@angular/core/testing';

import { KkAjPublicFormsService } from './kk-aj-public-forms.service';

describe('KkAjPublicFormsService', () => {
  let service: KkAjPublicFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KkAjPublicFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

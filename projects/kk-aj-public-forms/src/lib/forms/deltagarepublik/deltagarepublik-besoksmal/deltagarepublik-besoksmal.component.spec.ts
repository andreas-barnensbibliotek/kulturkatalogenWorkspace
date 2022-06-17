import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagarepublikBesoksmalComponent } from './deltagarepublik-besoksmal.component';

describe('DeltagarepublikBesoksmalComponent', () => {
  let component: DeltagarepublikBesoksmalComponent;
  let fixture: ComponentFixture<DeltagarepublikBesoksmalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltagarepublikBesoksmalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagarepublikBesoksmalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

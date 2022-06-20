import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagarepublikWorkshopComponent } from './deltagarepublik-workshop.component';

describe('DeltagarepublikWorkshopComponent', () => {
  let component: DeltagarepublikWorkshopComponent;
  let fixture: ComponentFixture<DeltagarepublikWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltagarepublikWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagarepublikWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

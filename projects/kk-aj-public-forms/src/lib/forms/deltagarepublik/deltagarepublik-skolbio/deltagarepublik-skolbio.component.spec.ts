import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagarepublikSkolbioComponent } from './deltagarepublik-skolbio.component';

describe('DeltagarepublikSkolbioComponent', () => {
  let component: DeltagarepublikSkolbioComponent;
  let fixture: ComponentFixture<DeltagarepublikSkolbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltagarepublikSkolbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagarepublikSkolbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

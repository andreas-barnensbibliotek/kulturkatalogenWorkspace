import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagarepublikComponent } from './deltagarepublik.component';

describe('DeltagarepublikComponent', () => {
  let component: DeltagarepublikComponent;
  let fixture: ComponentFixture<DeltagarepublikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltagarepublikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagarepublikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

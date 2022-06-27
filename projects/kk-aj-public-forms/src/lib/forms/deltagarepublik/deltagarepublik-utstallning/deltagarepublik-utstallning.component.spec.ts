import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagarepublikUtstallningComponent } from './deltagarepublik-utstallning.component';

describe('DeltagarepublikUtstallningComponent', () => {
  let component: DeltagarepublikUtstallningComponent;
  let fixture: ComponentFixture<DeltagarepublikUtstallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltagarepublikUtstallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagarepublikUtstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

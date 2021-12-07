import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArrFormComponent } from './main-arr-form.component';

describe('MainArrFormComponent', () => {
  let component: MainArrFormComponent;
  let fixture: ComponentFixture<MainArrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

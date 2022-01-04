import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtstallningComponent } from './utstallning.component';

describe('UtstallningComponent', () => {
  let component: UtstallningComponent;
  let fixture: ComponentFixture<UtstallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtstallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

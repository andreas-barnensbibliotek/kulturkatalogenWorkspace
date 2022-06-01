import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtstallLokalComponent } from './utstall-lokal.component';

describe('UtstallLokalComponent', () => {
  let component: UtstallLokalComponent;
  let fixture: ComponentFixture<UtstallLokalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtstallLokalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtstallLokalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

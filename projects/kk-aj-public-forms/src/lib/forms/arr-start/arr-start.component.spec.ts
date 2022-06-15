import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrStartComponent } from './arr-start.component';

describe('ArrStartComponent', () => {
  let component: ArrStartComponent;
  let fixture: ComponentFixture<ArrStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

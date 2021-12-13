import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrDetailsComponent } from './arr-details.component';

describe('ArrDetailsComponent', () => {
  let component: ArrDetailsComponent;
  let fixture: ComponentFixture<ArrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

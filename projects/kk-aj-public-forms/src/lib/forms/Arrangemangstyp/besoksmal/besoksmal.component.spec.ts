import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoksmalComponent } from './besoksmal.component';

describe('BesoksmalComponent', () => {
  let component: BesoksmalComponent;
  let fixture: ComponentFixture<BesoksmalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoksmalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoksmalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaWorkshopComponent } from './fakta-workshop.component';

describe('FaktaWorkshopComponent', () => {
  let component: FaktaWorkshopComponent;
  let fixture: ComponentFixture<FaktaWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktaWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

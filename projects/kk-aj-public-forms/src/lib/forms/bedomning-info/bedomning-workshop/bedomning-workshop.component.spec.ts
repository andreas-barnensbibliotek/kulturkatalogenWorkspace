import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedomningWorkshopComponent } from './bedomning-workshop.component';

describe('BedomningWorkshopComponent', () => {
  let component: BedomningWorkshopComponent;
  let fixture: ComponentFixture<BedomningWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedomningWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedomningWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

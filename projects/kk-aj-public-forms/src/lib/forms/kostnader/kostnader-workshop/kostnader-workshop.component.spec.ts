import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KostnaderWorkshopComponent } from './kostnader-workshop.component';

describe('KostnaderWorkshopComponent', () => {
  let component: KostnaderWorkshopComponent;
  let fixture: ComponentFixture<KostnaderWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KostnaderWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KostnaderWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

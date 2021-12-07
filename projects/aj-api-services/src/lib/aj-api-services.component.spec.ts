import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjApiServicesComponent } from './aj-api-services.component';

describe('AjApiServicesComponent', () => {
  let component: AjApiServicesComponent;
  let fixture: ComponentFixture<AjApiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjApiServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjApiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

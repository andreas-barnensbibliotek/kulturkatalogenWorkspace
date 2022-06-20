import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranskaFaktaComponent } from './granska-fakta.component';

describe('GranskaFaktaComponent', () => {
  let component: GranskaFaktaComponent;
  let fixture: ComponentFixture<GranskaFaktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranskaFaktaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranskaFaktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

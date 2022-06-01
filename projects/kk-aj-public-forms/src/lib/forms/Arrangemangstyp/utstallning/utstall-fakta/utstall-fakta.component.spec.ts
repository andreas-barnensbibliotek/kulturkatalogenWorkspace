import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtstallFaktaComponent } from './utstall-fakta.component';

describe('UtstallFaktaComponent', () => {
  let component: UtstallFaktaComponent;
  let fixture: ComponentFixture<UtstallFaktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtstallFaktaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtstallFaktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

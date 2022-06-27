import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaUtstallningComponent } from './fakta-utstallning.component';

describe('FaktaUtstallningComponent', () => {
  let component: FaktaUtstallningComponent;
  let fixture: ComponentFixture<FaktaUtstallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktaUtstallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaUtstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

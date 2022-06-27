import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokalUtstallningComponent } from './lokal-utstallning.component';

describe('LokalUtstallningComponent', () => {
  let component: LokalUtstallningComponent;
  let fixture: ComponentFixture<LokalUtstallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokalUtstallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokalUtstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

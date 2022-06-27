import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KostnaderUtstallningComponent } from './kostnader-utstallning.component';

describe('KostnaderUtstallningComponent', () => {
  let component: KostnaderUtstallningComponent;
  let fixture: ComponentFixture<KostnaderUtstallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KostnaderUtstallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KostnaderUtstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

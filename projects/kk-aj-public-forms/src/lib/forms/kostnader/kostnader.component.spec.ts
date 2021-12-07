import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KostnaderComponent } from './kostnader.component';

describe('KostnaderComponent', () => {
  let component: KostnaderComponent;
  let fixture: ComponentFixture<KostnaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KostnaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KostnaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

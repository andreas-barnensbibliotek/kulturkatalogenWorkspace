import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KostnaderBesoksmalComponent } from './kostnader-besoksmal.component';

describe('KostnaderBesoksmalComponent', () => {
  let component: KostnaderBesoksmalComponent;
  let fixture: ComponentFixture<KostnaderBesoksmalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KostnaderBesoksmalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KostnaderBesoksmalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

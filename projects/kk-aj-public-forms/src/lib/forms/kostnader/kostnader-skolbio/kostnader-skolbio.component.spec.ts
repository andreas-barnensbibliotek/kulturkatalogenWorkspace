import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KostnaderSkolbioComponent } from './kostnader-skolbio.component';

describe('KostnaderSkolbioComponent', () => {
  let component: KostnaderSkolbioComponent;
  let fixture: ComponentFixture<KostnaderSkolbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KostnaderSkolbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KostnaderSkolbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

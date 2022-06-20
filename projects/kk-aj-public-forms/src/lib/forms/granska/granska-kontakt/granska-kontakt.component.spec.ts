import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranskaKontaktComponent } from './granska-kontakt.component';

describe('GranskaKontaktComponent', () => {
  let component: GranskaKontaktComponent;
  let fixture: ComponentFixture<GranskaKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranskaKontaktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranskaKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

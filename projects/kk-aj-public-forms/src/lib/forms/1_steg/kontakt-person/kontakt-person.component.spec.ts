import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktPersonComponent } from './kontakt-person.component';

describe('KontaktPersonComponent', () => {
  let component: KontaktPersonComponent;
  let fixture: ComponentFixture<KontaktPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

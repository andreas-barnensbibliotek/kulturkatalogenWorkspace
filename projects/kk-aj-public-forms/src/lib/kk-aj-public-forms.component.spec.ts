import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkAjPublicFormsComponent } from './kk-aj-public-forms.component';

describe('KkAjPublicFormsComponent', () => {
  let component: KkAjPublicFormsComponent;
  let fixture: ComponentFixture<KkAjPublicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkAjPublicFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkAjPublicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

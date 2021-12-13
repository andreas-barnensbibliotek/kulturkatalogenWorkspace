import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkResultDetailsComponent } from './kk-result-details.component';

describe('KkResultDetailsComponent', () => {
  let component: KkResultDetailsComponent;
  let fixture: ComponentFixture<KkResultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkResultDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

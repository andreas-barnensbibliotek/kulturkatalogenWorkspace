import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkResultsComponent } from './kk-results.component';

describe('KkResultsComponent', () => {
  let component: KkResultsComponent;
  let fixture: ComponentFixture<KkResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

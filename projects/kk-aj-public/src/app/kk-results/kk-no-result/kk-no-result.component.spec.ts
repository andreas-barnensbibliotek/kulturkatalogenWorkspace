import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkNoResultComponent } from './kk-no-result.component';

describe('KkNoResultComponent', () => {
  let component: KkNoResultComponent;
  let fixture: ComponentFixture<KkNoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkNoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkNoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

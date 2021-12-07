import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkStartComponent } from './kk-start.component';

describe('KkStartComponent', () => {
  let component: KkStartComponent;
  let fixture: ComponentFixture<KkStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

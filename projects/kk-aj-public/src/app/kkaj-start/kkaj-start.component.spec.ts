import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkajStartComponent } from './kkaj-start.component';

describe('KkajStartComponent', () => {
  let component: KkajStartComponent;
  let fixture: ComponentFixture<KkajStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkajStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkajStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

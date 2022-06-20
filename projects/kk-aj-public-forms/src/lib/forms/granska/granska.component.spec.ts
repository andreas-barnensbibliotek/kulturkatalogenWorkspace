import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranskaComponent } from './granska.component';

describe('GranskaComponent', () => {
  let component: GranskaComponent;
  let fixture: ComponentFixture<GranskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

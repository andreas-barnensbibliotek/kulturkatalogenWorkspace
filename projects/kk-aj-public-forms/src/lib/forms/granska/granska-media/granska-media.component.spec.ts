import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranskaMediaComponent } from './granska-media.component';

describe('GranskaMediaComponent', () => {
  let component: GranskaMediaComponent;
  let fixture: ComponentFixture<GranskaMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranskaMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranskaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

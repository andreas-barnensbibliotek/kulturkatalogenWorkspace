import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValjUtovareComponent } from './valj-utovare.component';

describe('ValjUtovareComponent', () => {
  let component: ValjUtovareComponent;
  let fixture: ComponentFixture<ValjUtovareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValjUtovareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValjUtovareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyUtovareComponent } from './ny-utovare.component';

describe('NyUtovareComponent', () => {
  let component: NyUtovareComponent;
  let fixture: ComponentFixture<NyUtovareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyUtovareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyUtovareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

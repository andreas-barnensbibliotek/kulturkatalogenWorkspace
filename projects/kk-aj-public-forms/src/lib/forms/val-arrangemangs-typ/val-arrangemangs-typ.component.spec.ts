import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValArrangemangsTypComponent } from './val-arrangemangs-typ.component';

describe('ValArrangemangsTypComponent', () => {
  let component: ValArrangemangsTypComponent;
  let fixture: ComponentFixture<ValArrangemangsTypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValArrangemangsTypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValArrangemangsTypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

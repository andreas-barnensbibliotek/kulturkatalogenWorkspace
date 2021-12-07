import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarComponent } from './testar.component';

describe('TestarComponent', () => {
  let component: TestarComponent;
  let fixture: ComponentFixture<TestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

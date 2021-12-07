import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarformComponent } from './testarform.component';

describe('TestarformComponent', () => {
  let component: TestarformComponent;
  let fixture: ComponentFixture<TestarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

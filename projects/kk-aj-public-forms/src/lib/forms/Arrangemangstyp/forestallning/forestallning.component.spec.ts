import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestallningComponent } from './forestallning.component';

describe('ForestallningComponent', () => {
  let component: ForestallningComponent;
  let fixture: ComponentFixture<ForestallningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestallningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

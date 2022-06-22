import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkickainFormComponent } from './skickain-form.component';

describe('SkickainFormComponent', () => {
  let component: SkickainFormComponent;
  let fixture: ComponentFixture<SkickainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkickainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkickainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

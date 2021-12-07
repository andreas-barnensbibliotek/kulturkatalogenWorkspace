import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmakprovComponent } from './smakprov.component';

describe('SmakprovComponent', () => {
  let component: SmakprovComponent;
  let fixture: ComponentFixture<SmakprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmakprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmakprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

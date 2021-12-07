import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedomningInfoComponent } from './bedomning-info.component';

describe('BedomningInfoComponent', () => {
  let component: BedomningInfoComponent;
  let fixture: ComponentFixture<BedomningInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedomningInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedomningInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

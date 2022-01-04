import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkolbioComponent } from './skolbio.component';

describe('SkolbioComponent', () => {
  let component: SkolbioComponent;
  let fixture: ComponentFixture<SkolbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkolbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkolbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

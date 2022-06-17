import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokalSkolbioComponent } from './lokal-skolbio.component';

describe('LokalSkolbioComponent', () => {
  let component: LokalSkolbioComponent;
  let fixture: ComponentFixture<LokalSkolbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokalSkolbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokalSkolbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

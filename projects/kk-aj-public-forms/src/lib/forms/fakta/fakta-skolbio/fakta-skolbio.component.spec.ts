import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaSkolbioComponent } from './fakta-skolbio.component';

describe('FaktaSkolbioComponent', () => {
  let component: FaktaSkolbioComponent;
  let fixture: ComponentFixture<FaktaSkolbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktaSkolbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaSkolbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

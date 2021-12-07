import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidigareArrangemangComponent } from './tidigare-arrangemang.component';

describe('TidigareArrangemangComponent', () => {
  let component: TidigareArrangemangComponent;
  let fixture: ComponentFixture<TidigareArrangemangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TidigareArrangemangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TidigareArrangemangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

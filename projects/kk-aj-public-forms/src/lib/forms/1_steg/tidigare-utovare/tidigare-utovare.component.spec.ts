import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidigareUtovareComponent } from './tidigare-utovare.component';

describe('TidigareUtovareComponent', () => {
  let component: TidigareUtovareComponent;
  let fixture: ComponentFixture<TidigareUtovareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TidigareUtovareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TidigareUtovareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

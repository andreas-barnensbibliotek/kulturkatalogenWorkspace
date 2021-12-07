import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjCarouselBlockComponent } from './aj-carousel-block.component';

describe('AjCarouselBlockComponent', () => {
  let component: AjCarouselBlockComponent;
  let fixture: ComponentFixture<AjCarouselBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjCarouselBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjCarouselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

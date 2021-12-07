import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageuploadAJComponent } from './imageupload-aj.component';

describe('ImageuploadAJComponent', () => {
  let component: ImageuploadAJComponent;
  let fixture: ComponentFixture<ImageuploadAJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageuploadAJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageuploadAJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

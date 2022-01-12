import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkajCaruselComponent } from './kkaj-carusel.component';

describe('KkajCaruselComponent', () => {
  let component: KkajCaruselComponent;
  let fixture: ComponentFixture<KkajCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkajCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkajCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

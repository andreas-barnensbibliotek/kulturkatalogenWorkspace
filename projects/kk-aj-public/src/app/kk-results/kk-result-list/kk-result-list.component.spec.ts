import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkResultListComponent } from './kk-result-list.component';

describe('KkResultListComponent', () => {
  let component: KkResultListComponent;
  let fixture: ComponentFixture<KkResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

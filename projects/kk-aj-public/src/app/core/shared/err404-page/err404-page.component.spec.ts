import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err404PageComponent } from './err404-page.component';

describe('Err404PageComponent', () => {
  let component: Err404PageComponent;
  let fixture: ComponentFixture<Err404PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Err404PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Err404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

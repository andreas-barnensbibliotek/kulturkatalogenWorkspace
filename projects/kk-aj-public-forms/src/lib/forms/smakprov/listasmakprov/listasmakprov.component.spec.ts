import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasmakprovComponent } from './listasmakprov.component';

describe('ListasmakprovComponent', () => {
  let component: ListasmakprovComponent;
  let fixture: ComponentFixture<ListasmakprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasmakprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasmakprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

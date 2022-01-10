import { FormArray,FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-listasmakprov',
  templateUrl: './listasmakprov.component.html',
  styleUrls: ['./listasmakprov.component.scss']
})
export class ListasmakprovComponent implements OnInit {
  @Input() formGroupName!:string;
  smakprovListFrmArray!:FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.smakprovListFrmArray = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

  }

  // get expItems() {
  //   return this.smakprovListFrmArray.controls["Exempel"] as FormArray;
  // }
}

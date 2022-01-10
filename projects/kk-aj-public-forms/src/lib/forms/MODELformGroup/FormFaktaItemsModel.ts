import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormFaktaItemsModel {
  constructor(private fb: FormBuilder) { }

  public genFG:any  =
  this.fb.group({
        Faktaid: [''],
        FaktaTypID:[''],
        Faktarubrik: [''],
        FaktaValue: [''],
        })
}

import { FormControl, FormGroup, FormArray } from '@angular/forms';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormFaktaItemsModel {

 public genFG:any  =
    new FormGroup({
      Faktaid: new FormControl(''),
      FaktaTypID:new FormControl(''),
      Faktarubrik: new FormControl(''),
      FaktaValue: new FormControl(''),
      })
}

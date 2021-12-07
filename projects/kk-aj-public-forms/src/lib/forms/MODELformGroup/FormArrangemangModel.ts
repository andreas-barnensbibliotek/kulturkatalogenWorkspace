import { FormControl, FormGroup } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormArrangemangModel {

 public genFG:any  = {
    Rubrik: new FormControl(''),
    UnderRubrik: new FormControl(''),
    Innehall:new FormControl(''),
    Arrangemangtyp: new FormControl(''),
    Konstform: new FormControl(''),
    Konstform2: new FormControl(''),
    Konstform3: new FormControl(''),
   }


}



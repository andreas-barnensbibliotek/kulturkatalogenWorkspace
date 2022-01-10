import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormArrangemangModel {
  constructor(private fb: FormBuilder) { }

  public genFG:any  = {
    Rubrik: [''],
    UnderRubrik: [''],
    Innehall:[''],
    Arrangemangtyp: [''],
    Konstform: this.fb.array([]),
    Konstform2: [''],
    Konstform3: [''],
    MainImage: this.fb.group({
      MediaID: [''],
      MediaUrl: [''],
      MediaFilename: [''],
      MediaSize: [''],
      MediaAlt: [''],
      MediaFoto: [''],
      MediaTyp: [''],
      MediaVald: [''],
      mediaTitle:[''],
      mediaBeskrivning:[''],
      mediaLink: [''],
    })
   }


}



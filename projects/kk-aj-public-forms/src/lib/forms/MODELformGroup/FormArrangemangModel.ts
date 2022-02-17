import { FormArray, FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormArrangemangModel {
  constructor(private fb: FormBuilder) { }

  public genFG:any  = {
    Rubrik: ['',Validators.required],
    UnderRubrik: [''],
    Innehall:['',Validators.required],
    Arrangemangtyp: ['',Validators.required],
    Konstform: [null,Validators.required],
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
    },Validators.required)
  }
  public genFGTmp:any  = {
    Rubrik: 'Rubrikimport',
    UnderRubrik: 'Underrubrik Import',
    Innehall:'Import texte i editor',
    Arrangemangtyp: '7',
    Konstform: '',
    Konstform2: '',
    Konstform3: '',
    MainImage: [{
      MediaID: '',
      MediaUrl: '',
      MediaFilename: '',
      MediaSize: '',
      MediaAlt: '',
      MediaFoto: '',
      MediaTyp: '',
      MediaVald: '',
      mediaTitle:'',
      mediaBeskrivning:'',
      mediaLink: '',
    }]
  }

}



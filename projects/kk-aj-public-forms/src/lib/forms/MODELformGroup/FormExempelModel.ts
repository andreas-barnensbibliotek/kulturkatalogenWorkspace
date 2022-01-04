import { FormControl, FormGroup } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormExempelModel {

 public genFG:any  = {

    MediaID: new FormControl(''),
    MediaUrl: new FormControl(''),
    MediaFilename: new FormControl(''),
    MediaSize: new FormControl(''),
    MediaAlt: new FormControl(''),
    MediaFoto: new FormControl(''),
    MediaTyp: new FormControl(''),
    MediaVald: new FormControl(''),
    mediaTitle:new FormControl(''),
    mediaBeskrivning:new FormControl(''),
    mediaLink: new FormControl(''),

   }

  // getUtovareData(){
  //   return {
  //     KontaktId:'',
  //     Kontaktfornamn: 'Andreas',
  //     KontaktEfternamn: 'Josefsson',
  //     KontaktTelefon: '0708183215',
  //     KontaktEpost: 'test@test.se',
  //   }
  // }

}

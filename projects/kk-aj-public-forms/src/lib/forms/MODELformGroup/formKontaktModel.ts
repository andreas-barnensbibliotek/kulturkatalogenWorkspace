import { FormControl, FormGroup } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class formKontaktModel {

 public genFG:any  = {
    KontaktId: [''],
    Kontaktfornamn:[''],
    KontaktEfternamn: [''],
    KontaktTelefon: [''],
    KontaktEpost: [''],
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

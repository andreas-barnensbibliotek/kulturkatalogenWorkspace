import { FormControl, FormGroup } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class formUtovareModel {

 public genFG:any  = {
    UtovarID: new FormControl(''),
    Organisation: new FormControl(''),
    Fornamn: new FormControl(''),
    Efternamn: new FormControl(''),
    Telefon: new FormControl(''),
    Adress: new FormControl(''),
    Postnr: new FormControl(''),
    Ort: new FormControl(''),
    Epost: new FormControl(''),
    Kommun: new FormControl(''),
    Weburl: new FormControl(''),
    Bild: new FormControl(''),
    Beskrivning: new FormControl(''),
   }

   getUtovareData(){
     return {
      UtovarID: '86',
      Organisation: 'dev Kulturkatalogen',
      Fornamn: 'Andreas',
      Efternamn: 'Josefsson',
      Telefon: '0708183215',
      Adress: 'Sturegatan 35',
      Postnr: '50115',
      Ort: 'Borås',
      Epost: 'test@test.se',
      Kommun: 'Borås',
      Weburl: 'www.kulturkatalgonenvast.se',
      Bild: '',
      Beskrivning: 'Kulturkatalogen testkonto'
    }
  }

}

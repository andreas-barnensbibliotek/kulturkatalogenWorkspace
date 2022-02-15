import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class formUtovareModel {

 public genFG:any  = {
    UtovarID: [''],
    Organisation: ['', Validators.required],
    Fornamn: ['', Validators.required],
    Efternamn: ['', Validators.required],
    Telefon: [''],
    Adress: ['', Validators.required],
    Postnr: ['', Validators.required],
    Ort: ['', Validators.required],
    Epost: ['', [Validators.required, Validators.email]],
    Kommun: ['', Validators.required],
    Weburl: [''],
    Bild: [''],
    Beskrivning: [''],
   }

   getUtovareData(){
     return {
      UtovarID: '86',
      Organisation: 'DEV Kulturkatalogen',
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

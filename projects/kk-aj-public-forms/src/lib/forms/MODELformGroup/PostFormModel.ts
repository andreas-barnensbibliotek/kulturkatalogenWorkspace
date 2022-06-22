import {Injectable } from "@angular/core";
import { IPostFormModel } from "./IPostFormModel";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class PostFormModel {
  constructor(){}

  public fdObj:IPostFormModel  =
  {
      Rubrik:"",
      UnderRubrik:"",
      Innehall:"",
      Arrangemangtyp:"",
      Konstform:[],
      Konstform2:"",
      Konstform3:"",
      KontaktId:"",
      Kontaktfornamn:"",
      KontaktEfternamn:"",
      KontaktTelefon:"",
      KontaktEpost:"",
      Faktalist:[],
      MainImage: [],
      Utovare:"",
      UtovarID:"",
      Organisation:"",
      Fornamn:"",
      Efternamn:"",
      Telefon:"",
      Adress:"",
      Postnr:"",
      Ort:"",
      Epost:"",
      Kommun:"",
      Weburl:"",

  }

}

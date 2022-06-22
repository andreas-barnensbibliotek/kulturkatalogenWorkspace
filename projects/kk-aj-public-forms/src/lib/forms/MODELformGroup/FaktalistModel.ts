import {Injectable } from "@angular/core";
import { IFaktalist } from "./IFaktalist";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FaktalistModel {

  public faktaobj:IFaktalist={
    Faktaid:"",
    FaktaTypID:"",
    Faktarubrik:"",
    FaktaValue:""
  }
}

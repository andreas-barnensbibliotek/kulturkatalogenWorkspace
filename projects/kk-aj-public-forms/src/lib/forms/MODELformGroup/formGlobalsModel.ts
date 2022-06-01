import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class formGlobalsModel {

  constructor(){ }

  public faktaTypId = {
    'forestallning':1,
    'utstallning':2,
    'workshop': 4,
    'besoksmal': 7,
    'skolbio':8,
  }

}

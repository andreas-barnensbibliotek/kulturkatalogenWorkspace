import { FormControl, FormGroup } from '@angular/forms';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormFaktaModel {

  public genFG:any  =
  new FormGroup({
    AntalMedverkande: this.genChildFG(0,2),
    Medverkande: this.genChildFG(0,3),
    Period: this.genChildFG(0,4),
    BokningsbarTom: this.genChildFG(0,5),
    MaxPublik: this.genChildFG(0,6),
    AlderFran: this.genChildFG(0,7),
    AlderTill: this.genChildFG(0,8),
    ForestallningarDag: this.genChildFG(0,9),
    Byggtid: this.genChildFG(0,10),
    Rivtid: this.genChildFG(0,11),
    ScenBredd: this.genChildFG(0,12),
    ScenDjup: this.genChildFG(0,13),
    ScenTakHojd: this.genChildFG(0,14),
    Ljust: this.genChildFG(0,15),
    BarHjalp: this.genChildFG(0,16),
    El: this.genChildFG(0,17),
    OvrigaLokalkrav: this.genChildFG(0,18),
    Konstnad: this.genChildFG(0,19),
    KostnadAndraArr: this.genChildFG(0,20),
    Resor: this.genChildFG(0,21),
    Logi: this.genChildFG(0,22),
    LogiOvrigt: this.genChildFG(0,23),
    Traktamente: this.genChildFG(0,24),
    Lararhandledning: this.genChildFG(0,25),
    Speltid: this.genChildFG(0,26),
    Morklaggning: this.genChildFG(0,27),
    Ljud: this.genChildFG(0,28),
    KostnadPaket: this.genChildFG(0,29),
    OvrigaKostnader: this.genChildFG(0,30),
    Ovrigt: this.genChildFG(0,33),
    KostnadtredjeArr: this.genChildFG(0,34),
    PremiarDatum: this.genChildFG(0,35),
    MaxAntal: this.genChildFG(0,36),
    Cv: this.genChildFG(0,37),
    BidragStod: this.genChildFG(0,38),
    BidragStodFran: this.genChildFG(0,39),
    FSkatt: this.genChildFG(0,40),
    Centrumbildning: this.genChildFG(0,41),
    OvrigInfo: this.genChildFG(0,42),
    UtstallningsPeriod: this.genChildFG(0,43),
    PedagogisVerksamhet: this.genChildFG(0,44),
    Marknadsforing: this.genChildFG(0,45),
    Yta: this.genChildFG(0,46),
  })

  genChildFG(faktaid:number, Faktatyp:number){
    return new FormGroup({
      Faktaid: new FormControl(faktaid),
      FaktaTypID:new FormControl(Faktatyp),
      Faktarubrik: new FormControl(''),
      FaktaValue: new FormControl(''),
      })
    }
}

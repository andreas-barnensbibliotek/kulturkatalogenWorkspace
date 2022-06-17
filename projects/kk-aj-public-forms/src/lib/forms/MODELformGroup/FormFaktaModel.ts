import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Injectable } from "@angular/core";
import { FormExempelModel } from './../MODELformGroup/FormExempelModel';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormFaktaModel {
  constructor(public fb:FormBuilder,public _exempelMdl: FormExempelModel){

  }
  public genFG:any  =
  {
    AntalMedverkande: null,
    Medverkande: null,
    Period: null,
    BokningsbarTom: null,
    MaxPublik: null,
    AlderFran:  null,
    AlderTill: null,
    ForestallningarDag: null,
    Byggtid: null,
    Rivtid:null,
    ScenBredd: null,
    ScenDjup: null,
    ScenTakHojd: null,
    Ljus: null,
    BarHjalp: null,
    El: null,
    OvrigaLokalkrav: null,
    Kostnad: null,
    KostnadAndraArr: null,
    Resor:null,
    Logi: null,
    LogiOvrigt: null,
    Traktamente: null,
    Lararhandledning: null,
    Speltid: null,
    Morklaggning:null,
    Ljud: null,
    KostnadPaket: null,
    OvrigaKostnader: null,
    Ovrigt: null,
    KostnadtredjeArr: null,
    PremiarDatum: null,
    MaxAntal: null,
    Cv: null,
    BidragStod: null,
    BidragStodFran: null,
    FSkatt: null,
    Centrumbildning: null,
    OvrigInfo:null,
    UtstallningsPeriod: null,
    PedagogisVerksamhet: null,
    Marknadsforing: null,
    Yta: null,
    Exempel:this.fb.array([])
    // Exempel:this.fb.group(this._exempelMdl.genFG)
  }

  public genFGBesoksmal:any  =
  {
    AlderFran: this.fb.array([],Validators.required),
    OvrigaKostnader: ['', Validators.required],
    Ovrigt: null,
    Exempel: this.fb.array([])
    // Exempel:this.fb.group(this._exempelMdl.genFG)
  }

  public tmpgenFGBesoksmal:any  =
  {
    AlderFran:  ["3","4"],
    OvrigaKostnader: 'test',
    Ovrigt: 'test2',
    Exempel: null
    // Exempel:this.fb.group(this._exempelMdl.genFG)
  }

  public genFGSkolbioValidator:any  =
  {
    AlderFran: this.fb.array([],Validators.required),
    OvrigaLokalkrav: [''],
    Kostnad: ['', Validators.required],
    Lararhandledning: [''],
    Speltid: ['', Validators.required],
    OvrigaKostnader: [''],
    Ovrigt: [''],
    Exempel: this.fb.array([])
  }

  public genFGEmpty:any  =
  {
    AntalMedverkande:"",
    Medverkande:"",
    Period:"",
    BokningsbarTom:"",
    MaxPublik:"",
    AlderFran: "",
    AlderTill:"",
    ForestallningarDag:"",
    Byggtid:"",
    Rivtid:"",
    ScenBredd:"",
    ScenDjup:"",
    ScenTakHojd:"",
    Ljus:"",
    BarHjalp:"",
    El:"",
    OvrigaLokalkrav:"",
    Kostnad:"",
    KostnadAndraArr:"",
    Resor:"",
    Logi:"",
    LogiOvrigt:"",
    Traktamente:"",
    Lararhandledning:"",
    Speltid:"",
    Morklaggning:"",
    Ljud:"",
    KostnadPaket:"",
    OvrigaKostnader:"",
    Ovrigt:"",
    KostnadtredjeArr:"",
    PremiarDatum:"",
    MaxAntal:"",
    Cv:"",
    BidragStod:"",
    BidragStodFran:"",
    FSkatt:"",
    Centrumbildning:"",
    OvrigInfo:"",
    UtstallningsPeriod:"",
    PedagogisVerksamhet:"",
    Marknadsforing:"",
    Yta:"",
    Exempel: this.fb.array([])
    // Exempel:this.fb.group(this._exempelMdl.genFG)
  }

  public genFGDummy:any  =
  {
    AntalMedverkande:"23",
    Medverkande:"2",
    Period:"2022-03-03",
    BokningsbarTom:"2022-03-03",
    MaxPublik:"10",
    AlderFran:  ["3","4"],
    AlderTill:"",
    ForestallningarDag:"2",
    Byggtid:"10",
    Rivtid:"12",
    ScenBredd:"2",
    ScenDjup:"4",
    ScenTakHojd:"3",
    Ljus:"ja",
    BarHjalp:"nej",
    El: null,
    OvrigaLokalkrav: null,
    Kostnad: null,
    KostnadAndraArr: null,
    Resor:null,
    Logi: null,
    LogiOvrigt: null,
    Traktamente: null,
    Lararhandledning: null,
    Speltid: null,
    Morklaggning:null,
    Ljud: null,
    KostnadPaket: null,
    OvrigaKostnader: 'test',
    Ovrigt: 'test2',
    KostnadtredjeArr: null,
    PremiarDatum: null,
    MaxAntal: null,
    Cv: null,
    BidragStod: null,
    BidragStodFran: null,
    FSkatt: null,
    Centrumbildning: null,
    OvrigInfo:null,
    UtstallningsPeriod: null,
    PedagogisVerksamhet: null,
    Marknadsforing: null,
    Yta: null,
    Exempel: this.fb.array([])
    // Exempel:this.fb.group(this._exempelMdl.genFG)
  }




  // public genFG:any  =
  // {
  //   AntalMedverkande: this.genChildFG(0,2),
  //   Medverkande: this.genChildFG(0,3),
  //   Period: this.genChildFG(0,4),
  //   BokningsbarTom: this.genChildFG(0,5),
  //   MaxPublik: this.genChildFG(0,6),
  //   AlderFran: this.genChildFG(0,7),
  //   AlderTill: this.genChildFG(0,8),
  //   ForestallningarDag: this.genChildFG(0,9),
  //   Byggtid: this.genChildFG(0,10),
  //   Rivtid: this.genChildFG(0,11),
  //   ScenBredd: this.genChildFG(0,12),
  //   ScenDjup: this.genChildFG(0,13),
  //   ScenTakHojd: this.genChildFG(0,14),
  //   Ljust: this.genChildFG(0,15),
  //   BarHjalp: this.genChildFG(0,16),
  //   El: this.genChildFG(0,17),
  //   OvrigaLokalkrav: this.genChildFG(0,18),
  //   Kostnad: this.genChildFG(0,19),
  //   KostnadAndraArr: this.genChildFG(0,20),
  //   Resor: this.genChildFG(0,21),
  //   Logi: this.genChildFG(0,22),
  //   LogiOvrigt: this.genChildFG(0,23),
  //   Traktamente: this.genChildFG(0,24),
  //   Lararhandledning: this.genChildFG(0,25),
  //   Speltid: this.genChildFG(0,26),
  //   Morklaggning: this.genChildFG(0,27),
  //   Ljud: this.genChildFG(0,28),
  //   KostnadPaket: this.genChildFG(0,29),
  //   OvrigaKostnader: this.genChildFG(0,30),
  //   Ovrigt: this.genChildFG(0,33),
  //   KostnadtredjeArr: this.genChildFG(0,34),
  //   PremiarDatum: this.genChildFG(0,35),
  //   MaxAntal: this.genChildFG(0,36),
  //   Cv: this.genChildFG(0,37),
  //   BidragStod: this.genChildFG(0,38),
  //   BidragStodFran: this.genChildFG(0,39),
  //   FSkatt: this.genChildFG(0,40),
  //   Centrumbildning: this.genChildFG(0,41),
  //   OvrigInfo: this.genChildFG(0,42),
  //   UtstallningsPeriod: this.genChildFG(0,43),
  //   PedagogisVerksamhet: this.genChildFG(0,44),
  //   Marknadsforing: this.genChildFG(0,45),
  //   Yta: this.genChildFG(0,46),
  // }

  // genChildFG(faktaid:number, Faktatyp:number){
  //   return new FormGroup({
  //     Faktaid: new FormControl(faktaid),
  //     FaktaTypID:new FormControl(Faktatyp),
  //     Faktarubrik: [''],
  //     FaktaValue: [''],
  //     })
  //   }
}

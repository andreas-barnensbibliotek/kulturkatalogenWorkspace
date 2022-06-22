import { IPostFormModel } from './IPostFormModel';
import { Injectable } from "@angular/core";
import { PostFormModel } from './PostFormModel';
import { FaktalistModel } from './FaktalistModel';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class postFormDataModel {

    public postdataObj:IPostFormModel;

    constructor(private pdObj:PostFormModel, private fktObj:FaktalistModel){
      this.postdataObj = pdObj.fdObj;
    }
  public prepareDataForSubmit(formobj:any){
    console.log("test");
    this.addArrangemangToSubmitObj(formobj.ArrForm.Arrangemang);
    this.addUtovareToSubmitObj(formobj.Utovarelist);
    this.addKontaktToSubmitObj(formobj.Kontakt);
    this.addFaktaToSubmitObj(formobj.ArrForm.Faktalist)
  }

  private addArrangemangToSubmitObj(baseFormModel:any){
    this.postdataObj.Rubrik = baseFormModel.Rubrik;
    this.postdataObj.UnderRubrik = baseFormModel.UnderRubrik;
    this.postdataObj.Innehall = baseFormModel.Innehall;
    this.postdataObj.Arrangemangtyp = baseFormModel.Arrangemangtyp;
    this.postdataObj.Konstform = baseFormModel.Konstform;
    this.postdataObj.Konstform2 = baseFormModel.Konstform2;
    this.postdataObj.Konstform3 = baseFormModel.Konstform3;
    console.log("postobj " + this.postdataObj);
  }

  private addUtovareToSubmitObj(baseFormModel:any){
    this.postdataObj.UtovarID = baseFormModel.UtovarID;
    this.postdataObj.Organisation = baseFormModel.Organisation;
    this.postdataObj.Fornamn = baseFormModel.Fornamn;
    this.postdataObj.Efternamn = baseFormModel.Efternamn;
    this.postdataObj.Telefon = baseFormModel.Telefon;
    this.postdataObj.Adress = baseFormModel.Adress;
    this.postdataObj.Postnr = baseFormModel.Postnr;
    this.postdataObj.Ort = baseFormModel.Ort;
    this.postdataObj.Epost = baseFormModel.Epost;
    this.postdataObj.Kommun = baseFormModel.Kommun;
    this.postdataObj.Weburl = baseFormModel.Weburl;
    console.log("postobj " + this.postdataObj);
  }

  private addKontaktToSubmitObj(baseFormModel:any){
    this.postdataObj.KontaktId = baseFormModel.KontaktId;
    this.postdataObj.Kontaktfornamn = baseFormModel.Kontaktfornamn;
    this.postdataObj.KontaktEfternamn = baseFormModel.KontaktEfternamn;
    this.postdataObj.KontaktTelefon = baseFormModel.KontaktTelefon;
    this.postdataObj.KontaktEpost = baseFormModel.KontaktEpost;

    console.log("postobj " + this.postdataObj);
  }

  private addFaktaToSubmitObj(baseFormModel:any){
    this.postdataObj.Faktalist.push(this.addFakta(7, baseFormModel.AlderFran));//Ålder från
    this.postdataObj.Faktalist.push(this.addFakta(19, baseFormModel.Kostnad)); //Kostnad/Pris
    this.postdataObj.Faktalist.push(this.addFakta(25, baseFormModel.Lararhandledning)); //Lärarhandledning
    this.postdataObj.Faktalist.push(this.addFakta(26, baseFormModel.Speltid));
    this.postdataObj.Faktalist.push(this.addFakta(30, baseFormModel.OvrigaKostnader));
    this.postdataObj.Faktalist.push(this.addFakta(33, baseFormModel.Ovrigt));
    console.log("postobj " + this.postdataObj);
  }

  private addFakta(faktatypid:number,faktaValue:string){
    return {
      Faktaid:"",
      FaktaTypID: faktatypid.toString(),
      Faktarubrik: "",
      FaktaValue: faktaValue
    };
  }

  // private addFaktaToSubmitObj(fakta:any){

    // let tmpArr:Array<IFaktalist>= [];
    // if(fakta.AlderFran){
    //   let tmpAlder:IFaktalist ={
    //     Faktaid:fakta.Faktaid,
    //     FaktaTypID: fakta.FaktaTypID,
    //     Faktarubrik: fakta.Faktarubrik,
    //     FaktaValue: fakta.FaktaValue
    //   };
    //   tmpArr.push(tmpAlder);
    // }
    // if(fakta.AlderFran){
    //   this.fktObj.faktaobj.Faktaid= fakta.Faktaid
    //   this.fktObj.faktaobj.FaktaTypID= fakta.FaktaTypID
    //   this.fktObj.faktaobj.Faktarubrik= fakta.Faktarubrik
    //   this.fktObj.faktaobj.FaktaValue= fakta.FaktaValue
    //   tmpArr.push(this.fktObj.faktaobj);
    // }
  // }

}

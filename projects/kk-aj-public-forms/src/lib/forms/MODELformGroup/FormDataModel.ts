import { IPostFormModel } from './IPostFormModel';
import {Injectable } from "@angular/core";
import { PostFormModel } from './PostFormModel';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormDataModel {

  public formImgData:any;
  public previewImg:any;
  public postdataObj:IPostFormModel;

  constructor(private pdObj:PostFormModel){
    this.postdataObj = pdObj.fdObj;
    this.formImgData= new FormData();
  }

  public prepareDataForSubmit(formobj:any){
    this.addFaktaToSubmitObj(formobj.ArrForm.Faktalist)
  }


  private addtoFaktalist(faktatypid:number,faktarubrik:string,faktaValue:string) {
    if(faktaValue){
      this.postdataObj.Faktalist.push(this.addFakta(faktatypid,faktarubrik, faktaValue));//Ålder från
    }else{
      return false;
    }
  }

  private addFaktaToSubmitObj(baseFormModel:any){
    this.postdataObj.Faktalist= [];

    for (const [key, value] of Object.entries(baseFormModel)) {
      console.log('key is:', key);
      console.log('value is:', value);

      switch(key){
        case "Arrangorsstod":
          this.addtoFaktalist(1,"Arrangörsstöd ", baseFormModel.Arrangorsstod );//Arrangörsstöd
        break;
        case "AntalMedverkande":
          this.addtoFaktalist(2,"Antal medverkande", baseFormModel.AntalMedverkande);//Antal medverkande
        break;
        case "Medverkande":
          this.addtoFaktalist(3,"Medverkande ", baseFormModel.Medverkande );//Medverkande
        break;
        case "Period":
          this.addtoFaktalist(4,"Period ", baseFormModel.Period );//Period
        break;
        case "BokningsbarTom":
          this.addtoFaktalist(5,"Bokningsbar tom", baseFormModel.BokningsbarTom);//Bokningsbar tom
        break;
        case "MaxPublik":
          this.addtoFaktalist(6,"Max publik", baseFormModel.MaxPublik);//Max publik
        break;
        case "AlderFran":
          this.addtoFaktalist(7,"Ålder", baseFormModel.AlderFran);//Ålder från
        break;
        case "AlderTill":
          this.addtoFaktalist(8,"Ålder till", baseFormModel.AlderTill);//Ålder till
        break;
        case "ForestallningarDag":
          this.addtoFaktalist(9,"Föreställningar/dag", baseFormModel.ForestallningarDag);//Föreställningar/dag
        break;
        case "Byggtid":
          this.addtoFaktalist(10,"Byggtid", baseFormModel.Byggtid);//Byggtid
        break;
        case "Rivtid":
          this.addtoFaktalist(11,"Rivtid", baseFormModel.Rivtid);//Rivtid
        break;
        case "ScenBredd":
          this.addtoFaktalist(12,"Scen bredd", baseFormModel.ScenBredd);//Scen bredd
        break;
        case "ScenDjup":
          this.addtoFaktalist(13,"Scen djup", baseFormModel.ScenDjup);//Scen djup
        break;
        case "ScenTakHojd":
          this.addtoFaktalist(14,"Scen takhöjd", baseFormModel.ScenTakHojd);//Scen takhöjd
        break;
        case "Ljus":
          this.addtoFaktalist(15,"Ljus ", baseFormModel.Ljus);//Ljus
        break;
        case "BarHjalp":
          this.addtoFaktalist(16,"Bärhjälp behövs", baseFormModel.BarHjalp);//Bärhjälp behövs
        break;
        case "El":
          this.addtoFaktalist(17,"El ", baseFormModel.El);//El
        break;
        case "OvrigaLokalkrav":
          this.addtoFaktalist(18,"Övriga lokalkrav", baseFormModel.OvrigaLokalkrav);//Övriga lokalkrav
        break;
        case "Kostnad":
          this.addtoFaktalist(19,"Kostnad/Pris", baseFormModel.Kostnad); //Kostnad/Pris
        break;
        case "KostnadAndraArr":
          this.addtoFaktalist(20,"Kostnad andra arrangemanget", baseFormModel.KostnadAndraArr); //Kostnad andra arrangemanget
        break;
        case "Resor":
          this.addtoFaktalist(21,"Resor", baseFormModel.Resor); //Resor
        break;
        case "Logi":
          this.addtoFaktalist(22,"Logi", baseFormModel.Logi); //Logi
        break;
        case "LogiOvrigt":
          this.addtoFaktalist(23,"Logi övrigt ", baseFormModel.LogiOvrigt); //Logi övrigt
        break;
        case "Traktamente":
          this.addtoFaktalist(24,"Traktamente", baseFormModel.Traktamente); //Traktamente
        break;
        case "Lararhandledning":
          this.addtoFaktalist(25,"Lärarhandledning", baseFormModel.Lararhandledning); //Lärarhandledning
        break;
        case "Speltid":
          this.addtoFaktalist(26,"Speltid", baseFormModel.Speltid); //Speltid
        break;
        case "Morklaggning":
          this.addtoFaktalist(27,"Mörkläggning krävs", baseFormModel.Morklaggning); //Mörkläggning krävs
        break;
        case "Ljud":
          this.addtoFaktalist(28,"Ljud", baseFormModel.Ljud); //Ljud
        break;
        case "KostnadPaket":
          this.addtoFaktalist(29,"Kostnad paket", baseFormModel.KostnadPaket); //Kostnad paket
        break;
        case "OvrigaKostnader":
          this.addtoFaktalist(30,"Övrigt om kostnad", baseFormModel.OvrigaKostnader); //Övrigt om kostnad
        break;
        case "Resor":
          this.addtoFaktalist(31,"Resor", baseFormModel.Ljud); //Resor
        break;
        // case "Ljud":
        //   this.addtoFaktalist(32,"Traktamente", baseFormModel.Ljud); //Traktamente resor ???
        // break;
        case "Ovrigt":
          this.addtoFaktalist(33,"Övrigt", baseFormModel.Ovrigt); //Kostnad/Pris
        break;
        case "KostnadtredjeArr":
          this.addtoFaktalist(34,"Kostnad tredje arrangemanget", baseFormModel.KostnadtredjeArr); //Kostnad tredje arrangemanget
        break;
        case "PremiarDatum":
          this.addtoFaktalist(35,"Premiärdatum", baseFormModel.PremiarDatum); //Premiärdatum
        break;
        case "MaxAntal":
          this.addtoFaktalist(36,"Max antal deltagare ", baseFormModel.MaxAntal); //Max antal deltagare
        break;
        case "Cv":
          this.addtoFaktalist(37,"CV", baseFormModel.Cv); //CV
        break;
        case "BidragStod":
          this.addtoFaktalist(38,"Bidrag/stöd", baseFormModel.BidragStod); //Bidrag/stöd
        break;
        case "BidragStodFran":
          this.addtoFaktalist(39,"Bidrag/stöd från", baseFormModel.BidragStodFran); //Bidrag/stöd från
        break;
        case "FSkatt":
          this.addtoFaktalist(40,"F-skattsedel", baseFormModel.FSkatt); //F-skattsedel
        break;
        case "Centrumbildning":
          this.addtoFaktalist(41,"Medlem i centrumbildning", baseFormModel.Centrumbildning); //Medlem i centrumbildning
        break;
        case "OvrigInfo":
          this.addtoFaktalist(42,"Övrig information", baseFormModel.OvrigInfo); //Övrig information
        break;
        case "UtstallningsPeriod":
          this.addtoFaktalist(43,"Utställningsperiod", baseFormModel.UtstallningsPeriod); //Utställningsperiod
        break;
        case "PedagogisVerksamhet":
          this.addtoFaktalist(44,"Pedagogisk verksamhet", baseFormModel.PedagogisVerksamhet); //Pedagogisk verksamhet
        break;
        case "Marknadsforing":
          this.addtoFaktalist(45,"Marknadföring", baseFormModel.Marknadsforing); //Marknadföring
        break;
        case "Yta":
          this.addtoFaktalist(46,"Yta", baseFormModel.Yta); //Yta
        break;
      }
    }

      // this.addtoFaktalist(1,"Ålder", baseFormModel.AlderFran);//Ålder från


    // // this.postdataObj.Faktalist.push(this.addFakta(7,"Ålder", baseFormModel.AlderFran));//Ålder från
    // this.postdataObj.Faktalist.push(this.addFakta(19,"Kostnad/Pris", baseFormModel.Kostnad)); //Kostnad/Pris
    // this.postdataObj.Faktalist.push(this.addFakta(25,"Lärarhandledning", baseFormModel.Lararhandledning)); //Lärarhandledning
    // this.postdataObj.Faktalist.push(this.addFakta(26,"", baseFormModel.Speltid));
    // this.postdataObj.Faktalist.push(this.addFakta(30,"", baseFormModel.OvrigaKostnader));
    // this.postdataObj.Faktalist.push(this.addFakta(33,"", baseFormModel.Ovrigt));
    console.log("postobj " + this.postdataObj);
  }

  private addFakta(faktatypid:number,faktarubrik:string,faktaValue:string){
    return {
      Faktaid:"",
      FaktaTypID: faktatypid,
      Faktarubrik: faktarubrik,
      FaktaValue: faktaValue
    };
  }
}

import { ServerApiResponsModel } from './ServerApiResponsModel';
import { FormArrangemangModel } from './FormArrangemangModel';
import { FormBuilder, FormArray, FormGroupDirective, Validator, Validators } from '@angular/forms';
import { FormFaktaModel } from './FormFaktaModel';
import {Injectable } from "@angular/core";


@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class getTidigareModule {

  mainData?:any=[];

  constructor( public fb:FormBuilder, public _faktaMdl: FormFaktaModel, private _arrMdl:FormArrangemangModel, private _fullApiMdl:ServerApiResponsModel){}

  public getTidigareArr(id:number){
      return this.getFULLArrfromServer(id);

  }
  public ResetArr(){
    return this.getFULLArrfromServer(0);

}
  public getTidigareFakta(id:number){
    let JsonData = this.getArrfromServer(id);
    if(id == 7){ // besöksmål
      return this.getTidigareBesoksmal(JsonData);
    }
  }

  private getTidigareBesoksmal(tidigareArrObjFromApi:any){
    let updatedFormObj = this._faktaMdl.genFGBesoksmal;

    if(tidigareArrObjFromApi.AlderFran){
      tidigareArrObjFromApi.AlderFran =  [];
      tidigareArrObjFromApi.AlderFran.forEach((t: any) => {
        updatedFormObj.AlderFran.push(this.fb.control(t));
      });
    }
    updatedFormObj.OvrigaKostnader = this.fb.control(tidigareArrObjFromApi.OvrigaKostnader);
    updatedFormObj.Ovrigt = this.fb.control(tidigareArrObjFromApi.Ovrigt);

    if(tidigareArrObjFromApi.Exempel){
      tidigareArrObjFromApi.Exempel.forEach((t: any) => {
        updatedFormObj.Exempel.push(this.fb.control(t));
      });
    }

    return updatedFormObj;
  }
  // {
//   AlderFran:  ["3","4"],
//   OvrigaKostnader: 'test',
//   Ovrigt: 'test2',
//   Exempel: null <-- fylls inte i av funtionen
//   // Exempel:this.fb.group(this._exempelMdl.genFG)
// }


// -----------------------------------------------------------------------------------------
  private getArrfromServer(id:number){
    // Do ajaxcall
    let returl:string;
    switch(id){
      case 1:{
        returl= this._faktaMdl.genFGDummy;
        break;
      }
      default:{
        returl= this._faktaMdl.genFGDummy;
        break;
      }
    }
    return returl;
  }






  private getFULLArrfromServer(id:number){
    // Do ajaxcall
    let basedata;
    if(id==0){
      basedata= this._fullApiMdl.tmpResetArrModel;
    }else{
      basedata= this._fullApiMdl.tmpFullAPIResponse;
    }

    let specdata = basedata.kk_aj_admin.ansokningarlista.ansokningar[0];
    let updatedArrFormObj = this._arrMdl.genFG;

    updatedArrFormObj.Rubrik=  specdata.ansokningtitle;
    updatedArrFormObj.UnderRubrik=  specdata.ansokningsubtitle;
    updatedArrFormObj.Innehall=  this.decodeHTML(specdata.ansokningContent);
    updatedArrFormObj.Arrangemangtyp=  specdata.ansokningtypid;
    // updatedArrFormObj.Konstform=  specdata.ansokningtitle);

    if(specdata.ansokningkonstformid){
      //  let konstformID:any = '1';
      updatedArrFormObj.Konstform=this.fb.array([],Validators.required);
      specdata.ansokningkonstformid.forEach((t: any) => {
        updatedArrFormObj.Konstform.push(this.fb.control(t));
      });

      // updatedArrFormObj.Konstform =konstformID;
    }

    if(specdata.ansokningMediaImage){
      let tmparr = {
          MediaID: specdata.ansokningMediaImage.MediaID,
          MediaUrl: specdata.ansokningMediaImage.MediaUrl,
          MediaFilename: specdata.ansokningMediaImage.MediaFilename,
          MediaSize: specdata.ansokningMediaImage.MediaSize,
          MediaAlt: specdata.ansokningMediaImage.MediaAlt,
          MediaFoto: specdata.ansokningMediaImage.MediaFoto,
          MediaTyp: specdata.ansokningMediaImage.MediaTyp,
          MediaVald: specdata.ansokningMediaImage.MediaVald,
          mediaTitle: specdata.ansokningMediaImage.mediaTitle,
          mediaBeskrivning: specdata.ansokningMediaImage.mediaBeskrivning,
          mediaLink: specdata.ansokningMediaImage.mediaLink,
      };
      updatedArrFormObj.MainImage= this.fb.group(tmparr);
    }

    return updatedArrFormObj;

  }


  private decodeHTML = function (html:string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  // private getFULLArrfromServer(id:number){
  //   // Do ajaxcall
  //   let basedata = this._fullApiMdl.tmpFullAPIResponse;
  //   let specdata = basedata.kk_aj_admin.ansokningarlista.ansokningar[0];
  //   let updatedArrFormObj = this._arrMdl.genFG;

  //   updatedArrFormObj.Rubrik=  this.fb.control(specdata.ansokningtitle);
  //   updatedArrFormObj.UnderRubrik=  this.fb.control(specdata.ansokningsubtitle);
  //   updatedArrFormObj.Innehall=  this.fb.control(specdata.ansokningContent);
  //   updatedArrFormObj.Arrangemangtyp=  this.fb.control(specdata.ansokningtypid);
  //   // updatedArrFormObj.Konstform=  this.fb.control(specdata.ansokningtitle);

  //   if(specdata.ansokningkonstformid){
  //     specdata.ansokningkonstformid.forEach((t: any) => {
  //       updatedArrFormObj.Konstform.push(this.fb.control(t));
  //     });
  //   }

  //   if(specdata.ansokningMediaImage){
  //     let tmparr = {
  //         MediaID: this.fb.control(specdata.ansokningMediaImage.MediaID),
  //         MediaUrl: this.fb.control(specdata.ansokningMediaImage.MediaUrl),
  //         MediaFilename: this.fb.control(specdata.ansokningMediaImage.MediaFilename),
  //         MediaSize: this.fb.control(specdata.ansokningMediaImage.MediaSize),
  //         MediaAlt: this.fb.control(specdata.ansokningMediaImage.MediaAlt),
  //         MediaFoto: this.fb.control(specdata.ansokningMediaImage.MediaFoto),
  //         MediaTyp: this.fb.control(specdata.ansokningMediaImage.MediaTyp),
  //         MediaVald: this.fb.control(specdata.ansokningMediaImage.MediaVald),
  //         mediaTitle: this.fb.control(specdata.ansokningMediaImage.mediaTitle),
  //         mediaBeskrivning: this.fb.control(specdata.ansokningMediaImage.mediaBeskrivning),
  //         mediaLink: this.fb.control(specdata.ansokningMediaImage.mediaLink),
  //     };
  //     updatedArrFormObj.MainImage= this.fb.group(tmparr);
  //   }

  //   return updatedArrFormObj;

  // }

}

// {
//   AlderFran:  ["3","4"],
//   OvrigaKostnader: 'test',
//   Ovrigt: 'test2',
//   Exempel: null
//   // Exempel:this.fb.group(this._exempelMdl.genFG)
// }

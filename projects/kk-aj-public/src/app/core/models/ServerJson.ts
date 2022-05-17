import { Ifavoobj } from './../interface/Ifavoobj';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class ServerJson {

  _favoritStorageName:string = "favoritStorageItem";
  _favoListName:string= "favolist";
  favolist:any=[];


  constructor(){
    this.setupFavoLocalStorage(0);
  }
  getServerJson(){
    let retobj = this.ServerJsonDecorator();

    let favoritlist:any = localStorage.getItem(this._favoritStorageName);
    console.log("get stored");
    let jsonobj= JSON.parse(favoritlist);
    console.log( JSON.parse(favoritlist));

    return ;

  }

  getFavoritLista(){
    let favoListan:any = localStorage.getItem('favoritStorageItem');
    if(favoListan){
      return JSON.parse(favoListan);
    }else{
     return [];
    }
  }

  RemoveElementFromObjectArray(objectArray:any, key: number) {
    objectArray.ansokningar.forEach((value:any,index:number)=>{
        if(value.ansokningid==key) objectArray.ansokningar.splice(index,1);
    });
    return objectArray;
  }

  addFavoritToStorage(additm:any): void{
    let jsonobj:any = localStorage.getItem(this._favoritStorageName);

    // if(this.glb.isEmptyObj(localStorage.getItem(this._favoritStorageName)) || !this.glb.showCookies()){
    console.log("kör stored");

    // let tmpadditem:any
    // if(additm=="3710"){
    //   tmpadditem = this.testar()
    // }
    // if(additm=="3711"){
    //   tmpadditem = this.testar2()
    // }

    if(additm){
      if(!jsonobj){
        jsonobj = {"ansokningar" : []}
      }else{
        jsonobj = JSON.parse(jsonobj);
      }

      jsonobj.ansokningar.push(additm);
    }
    localStorage.setItem(this._favoritStorageName, JSON.stringify(jsonobj))
  }

  delFavoritFromStorage(itemid:number): void{
    if(itemid){
      let jsonobj:any = localStorage.getItem(this._favoritStorageName);
      let retobj = this.RemoveElementFromObjectArray(JSON.parse(jsonobj),itemid );
      localStorage.setItem(this._favoritStorageName, JSON.stringify(retobj))

      console.log( "visar: " +JSON.stringify(retobj));
    }
  }


  // favolist:Array<Ifavoobj>=[];

  setupFavoLocalStorage(idx:number){
    let favolistObj:any = localStorage.getItem(this._favoListName);

    let tmp=this.favolist;
    if(this.favolist.length>0){
      // let testar=tmp.find((e:Ifavoobj) => e.arrid == idx);
      localStorage.setItem(this._favoListName, JSON.stringify(this.favolist))
    }else{
      if(favolistObj){
        let jsonobj:any = localStorage.getItem(this._favoListName);
        this.favolist = JSON.parse(jsonobj);
      }
    }
  }

  changefavo(itm:any):void{

    // if (this.favolist.find((e:Ifavoobj) => e.arrid == itm.ansokningid)){
      let idx:number = this.favolist.indexOf(itm.ansokningid);
    if (idx >=0){
      this.delfavo(idx, itm.ansokningid);
    }else{
      this.addfavo(itm);
    }
     this.setupFavoLocalStorage(itm.ansokningid);
  }

  addfavo(itm:any){
    // let t:Ifavoobj= {
    //   isfavo : true,
    //   arrid: itm.ansokningid
    // };

    this.favolist.push(itm.ansokningid);
    console.log("click add");
    this.addFavoritToStorage(itm);
  }

  delfavo(idx:number,itmId:number){
    this.favolist.splice(idx,1);
    console.log("click delete");
    this.delFavoritFromStorage(itmId);
  }

  setFavoClass(arrid:number):boolean{
    let i = 0;
    // let currentobj:Ifavoobj = this.favolist.find((e:Ifavoobj) => e.arrid == arrid) as Ifavoobj;
    let currentobj = this.favolist.indexOf(arrid)
    // console.log(i += 1);
    let retobj: boolean= false;
    if (currentobj>=0){
      retobj = true;
    }
    return retobj;
  }

  ServerJsonDecorator(){
    return {
      "kk_aj_admin": {
        "Ansokningstyp": "approved",
        "ansokningarlista": {
          "ansokningarcount": "",
          "ansokningar": [{}],
        }
      }
    }
  };

 testar(){
   return  {
      "ansokningid": 3710,
      "ansokningdate": "11/12/2021 10:51:39",
      "ansokningcontentid": "",
      "ansokningtitle": "Kapten Kryp, Tempus & planetskötarna",
      "ansokningsubtitle": "",
      "ansokningContent": null,
      "ansokningutovare": "Kapten Kryp",
      "ansokningurl": "",
      "ansokningbilaga": "",
      "ansokningpublicerad": "ja",
      "ansokninglast": "Nej",
      "ansokningstatus": "",
      "ansokningtypid": "1",
      "ansokningkonstformid": "7",
      "ansokningtyp": "",
      "ansokningkonstform": "Natur- och  kulturarv",
      "ansokningmovieclip": null,
      "ansokningFaktalist": [],
      "ansokningMedialist": [],
      "ansokningUsername": "",
      "ansokningMediaImage": {
          "mediaID": 0,
          "mediaUrl": "3710_KaptenKryp_Tempus_planetskotarna.jpg",
          "mediaFilename": null,
          "mediaSize": null,
          "mediaAlt": null,
          "mediaFoto": null,
          "mediaTyp": null,
          "mediaVald": null,
          "mediaTitle": null,
          "mediaBeskrivning": null,
          "mediaLink": null,
          "sortering": null
      },
      "ansokningUtovarid": 751,
      "ansokningUtovardata": {
          "utovarID": 0,
          "organisation": null,
          "fornamn": null,
          "efternamn": null,
          "telefon": null,
          "adress": null,
          "postnr": null,
          "ort": null,
          "epost": null,
          "kommun": null,
          "weburl": null
      },
      "ansokningAgespan": null,
      "ansokningFilterfakta": null,
      "ansokningKonstform2": "0",
      "ansokningKonstform3": "0",
      "ansokningKontaktId": "",
      "ansokningKontaktfornamn": "",
      "ansokningKontaktEfternamn": "",
      "ansokningKontaktTelefon": "",
      "ansokningKontaktEpost": "",
      "periodStart": "11/12/2021 00:00:00",
      "periodSlut": "11/12/2022 00:00:00",
      "arkivStatus": "2",
      "startyear": "",
      "stoppyear": "",
      "imageUrl": "3710_KaptenKryp_Tempus_planetskotarna.jpg"
    };


 }
 testar2(){
  return  {
     "ansokningid": 3711,
     "ansokningdate": "11/12/2021 10:51:39",
     "ansokningcontentid": "",
     "ansokningtitle": "Kapten Kryp, Tempus & planetskötarna",
     "ansokningsubtitle": "",
     "ansokningContent": null,
     "ansokningutovare": "Kapten Kryp",
     "ansokningurl": "",
     "ansokningbilaga": "",
     "ansokningpublicerad": "ja",
     "ansokninglast": "Nej",
     "ansokningstatus": "",
     "ansokningtypid": "1",
     "ansokningkonstformid": "7",
     "ansokningtyp": "",
     "ansokningkonstform": "Natur- och  kulturarv",
     "ansokningmovieclip": null,
     "ansokningFaktalist": [],
     "ansokningMedialist": [],
     "ansokningUsername": "",
     "ansokningMediaImage": {
         "mediaID": 0,
         "mediaUrl": "3710_KaptenKryp_Tempus_planetskotarna.jpg",
         "mediaFilename": null,
         "mediaSize": null,
         "mediaAlt": null,
         "mediaFoto": null,
         "mediaTyp": null,
         "mediaVald": null,
         "mediaTitle": null,
         "mediaBeskrivning": null,
         "mediaLink": null,
         "sortering": null
     },
     "ansokningUtovarid": 751,
     "ansokningUtovardata": {
         "utovarID": 0,
         "organisation": null,
         "fornamn": null,
         "efternamn": null,
         "telefon": null,
         "adress": null,
         "postnr": null,
         "ort": null,
         "epost": null,
         "kommun": null,
         "weburl": null
     },
     "ansokningAgespan": null,
     "ansokningFilterfakta": null,
     "ansokningKonstform2": "0",
     "ansokningKonstform3": "0",
     "ansokningKontaktId": "",
     "ansokningKontaktfornamn": "",
     "ansokningKontaktEfternamn": "",
     "ansokningKontaktTelefon": "",
     "ansokningKontaktEpost": "",
     "periodStart": "11/12/2021 00:00:00",
     "periodSlut": "11/12/2022 00:00:00",
     "arkivStatus": "2",
     "startyear": "",
     "stoppyear": "",
     "imageUrl": "3710_KaptenKryp_Tempus_planetskotarna.jpg"
   };


}
}

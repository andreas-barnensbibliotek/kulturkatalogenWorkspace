import { Observable, Subject } from 'rxjs';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class ServerJson {

  _favoritStorageName:string = "favoritStorageItem";
  _favoListName:string= "favolist";
  favolist:any=[];

  favoAntalSubject = new Subject<number>();

  constructor(){
    this.setupFavoLocalStorage(0);
  }

  currentfavoritAntal(antal:number){
    this.favoAntalSubject.next(this.favoCounter());
  }

  getFavoritAntal():Observable<number>{
    return this.favoAntalSubject.asObservable();
  }

  public favoCounter(){
    let favolistan:any = localStorage.getItem(this._favoritStorageName);
    if(favolistan){
      let jsonobj= JSON.parse(favolistan);
    // console.log("detta" + Object.keys(jsonobj.ansokningar).length);
    return Object.keys(jsonobj.ansokningar).length;
    }else{
      return 0;
    }
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
    let favoListan:any = localStorage.getItem(this._favoritStorageName);
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
    if(additm){
      if(!jsonobj){
        jsonobj = {"ansokningar" : []}
      }else{
        jsonobj = JSON.parse(jsonobj);
      }

      jsonobj.ansokningar.push(additm);
    }
    localStorage.setItem(this._favoritStorageName, JSON.stringify(jsonobj))
    this.favoAntalSubject.next(this.favoCounter())
  }

  delFavoritFromStorage(itemid:number): void{
    if(itemid){
      let jsonobj:any = localStorage.getItem(this._favoritStorageName);
      if(this.favoCounter()==0){
        localStorage.removeItem(this._favoritStorageName);
        localStorage.removeItem(this._favoListName);
      }else{
        let retobj = this.RemoveElementFromObjectArray(JSON.parse(jsonobj),itemid );
        localStorage.setItem(this._favoritStorageName, JSON.stringify(retobj));
      }
      this.favoAntalSubject.next(this.favoCounter());
    }
  }

  setupFavoLocalStorage(idx:number){
    let favolistObj:any = localStorage.getItem(this._favoListName);

    let tmp=this.favolist;
    if(this.favolist.length>0){
      localStorage.setItem(this._favoListName, JSON.stringify(this.favolist))
    }else{
      if(favolistObj){
        let jsonobj:any = localStorage.getItem(this._favoListName);
        this.favolist = JSON.parse(jsonobj);
      }
    }
  }

  changefavo(itm:any):void{
      let idx:number = this.favolist.indexOf(itm.ansokningid);
    if (idx >=0){
      this.delfavo(idx, itm.ansokningid);
    }else{
      this.addfavo(itm);
    }
     this.setupFavoLocalStorage(itm.ansokningid);
  }

  addfavo(itm:any){
    this.favolist.push(itm.ansokningid);
    this.addFavoritToStorage(itm);
  }

  delfavo(idx:number,itmId:number){
    this.favolist.splice(idx,1);
    this.delFavoritFromStorage(itmId);
  }

  setFavoClass(arrid:number):boolean{
    let i = 0;
    let currentobj = this.favolist.indexOf(arrid)
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


// import { categoryStyles } from './../models/categoryStyles';
import { orderBy, filter, get, assign } from 'lodash-es';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { ValidatorFn } from '@angular/forms';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class App_Global {

  private _liveAPI:string = "https://api.kulturkatalogenvast.org";
  private _devAPI:string = "https://devapi.kulturkatalogenvast.org";
  private _SandboxAPI:string = "https://sandboxapi.kulturkatalogenvast.org";
  private _SandboxCoreAPI:string ="https://sandboxapicore.kulturkatalogenvast.org"
  private _localdevserver:string = "http://localhost:60485";
  private _localCordevserver:string = "https://localhost:44372";

  private _usedServer:string = this._SandboxAPI; // <-- denna används
  private _cmdApi_v2:string = "/Api_v2";

  server:string = this._usedServer + this._cmdApi_v2;
  coreserver:string = this._SandboxCoreAPI;
  devkey:string = "/alf/?type=json";
  coredevkey:string = "?devKey=alf";

  mainJsonKatalogItemList:any =[];
  showPageMax:number= 24;
  pageSize!: number;
  showMoreBtn!:boolean;

  blnMainpage:boolean = true;
  blnDetailpage:boolean= false;
  currentAnsokningid:any=0;
  currentCategoryName:any;
  currentCategoryID:any;
  currentpage!:number;
  filterform:any;
  showspinner:boolean= true;
  testtotal:any;
  currentversion:string="Version: 0.9.5 " + new Date().toISOString().slice(0, 10);
  private filterstartlist:any =[];

  private _mainJsonKatalogItemListHandler: Subject<void> = new Subject<void>();
  get mainJsonKatalogItemListHandler(){
    return this._mainJsonKatalogItemListHandler;
    // Global event handler ------
  }

  constructor(){
      this.showMainpage();
  }

  currSearch:Array<any>=[];
  setCurrentSearch(val:Array<any>){
    this.currSearch= val;
  }
  getCurrentSearch(){
    return this.currSearch;
  }

  filterSortera(typ:string){
    let mainArrlist = this.mainJsonKatalogItemList;
    // let svar = _.filter(catlist, ['name', 'Djur']);
    // let svar = _.filter(mainArrlist, (itm)=>{ return itm.id >10});
    if(!typ){ typ='asc';}

    let listselection = get(mainArrlist, 'kk_aj_admin.ansokningarlista.ansokningar')
    mainArrlist.kk_aj_admin.ansokningarlista.ansokningar= orderBy(listselection, 'ansokningtitle' )

    this.mainJsonKatalogItemList= mainArrlist;
    this.mainJsonKatalogItemListHandler.next();
  }

  Advancedfilter(cmd:string,jsonlist:any,val:any){
    if(cmd =='reset'){
      return jsonlist
    }else{
      let mainArrlist = jsonlist;
      let listselection = get(mainArrlist, 'kk_aj_admin.ansokningarlista.ansokningar')
       return mainArrlist.kk_aj_admin.ansokningarlista.ansokningar= filter(listselection, (itm: { ansokningFilterfakta: { Bokningsbar: any; }; })=>{ return itm.ansokningFilterfakta.Bokningsbar ==val});
    }
  }
  resetFilter(){
    if(!this.isEmptyObj(this.filterstartlist)){
      this.mainJsonKatalogItemList =this.filterstartlist;
      this.filterstartlist=[];
    }
  }
  showMainpage(){
      this.hidepages();
      this.blnMainpage= true;
  }
  showDetailpage(){
      this.hidepages();
      this.blnDetailpage= true;
  }
  hidepages(){
      this.blnMainpage= false;
      this.blnDetailpage= false;
  }

  public isEmptyObj = (obj:any) => {
    return obj === null || undefined
      ? true
      : (() => {
          for (const prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
              return false;
            }
          }
          return true;
        })();
  };

  public deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  public showCookies(){
    let retobj:boolean= true;
    let val:any;
    let name:string = "cookieconsent_status";
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        val= parts!.pop()!.split(";").shift();
    }
    if(val == "deny"){
      retobj= false;
    }
    return retobj;
  }

  public HeadTitleMapper(url:string){
    return this.capitalize(url.replace('/', '')) + " - Kulturkatalogen Väst";
  }

  private capitalize(str:string)  {
    return str && str[0].toUpperCase() + str.slice(1);
  }

  public conditionalValidator(predicate: BooleanFn, validator: ValidatorFn, errorNamespace?: string): ValidatorFn {
    return (formControl => {
      if (!formControl.parent) {
        return null;
      }
      let error:any = null;
      if (predicate()) {
        error = validator(formControl);
      }
      if (errorNamespace && error) {
        const customError: any = {};
        customError[errorNamespace] = error;
        error = customError
      }
      return error;
    })
  }
}
export interface BooleanFn {
  (): boolean;
}

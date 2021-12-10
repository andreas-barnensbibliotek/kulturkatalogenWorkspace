
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://katalog.frontdata.se"; // Timmele.se
  private _devLocalCore:string = "https://localhost:44372";
  private _SandboxAPI:string = "https://sandboxapicore.kulturkatalogenvast.org";
  private _localdevserver:string = "http://localhost:60485";
  private _wpApi:string = "/wp-json/wp/v2/";
  private _wpApiPost:string = "/wp-json/";

  userregistered:string = ""
  VisaMainNav:boolean=true;
  VisaGuideNav:boolean=false;
  currentversion:string="Version: 0.0.1 2021-12-01"

  server:string = this._devLocalCore;// + this._wpApi;
  postserver:string = this._devLocalCore + this._wpApiPost;
  devkey:string = "/devkey/alf/?type=json";

  constructor() {
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

  public categoryMapper(name:string){
    let tmpcatlist=  this.categoryMap().find(i=> i.catname === name)
    return tmpcatlist?.catid;
  }
  public categoryMap(){
    return [
      {catid:5, catname:"/offert"},
      {catid:4, catname:"/omoss"},
      {catid:6, catname:"/tillverkning"},
      {catid:5, catname:"/bas"},
    ]
  }

  public HeadTitleMapper(url:string){
    return this.capitalize(url.replace('/', '')) + " - Kulturkatalogen Väst ";
  }

  private capitalize(str:string)  {
    return str && str[0].toUpperCase() + str.slice(1);
  }
}

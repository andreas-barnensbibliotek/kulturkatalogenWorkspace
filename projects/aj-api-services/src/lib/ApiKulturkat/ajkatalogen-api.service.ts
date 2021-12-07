import { AjApiService } from './../core/aj-api.service';
import { Global } from './../core/Global/global';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjkatalogenApiService extends AjApiService {
  constructor(Http:HttpClient, private _global:Global) {
    super("",Http);
  }

  private _currentPageDataHandler: Subject<void> = new Subject<void>();

  get currentPageDataHandler(){
    return this._currentPageDataHandler
  }

  getTestKontakt(){
    let url:string= "https://localhost:44372/api/Test/Getkontakt";
    return this.getPosts(url);
  }

  getMeny(meny:any){
    let url:string = this._global.server + meny +"?filter[orderby]=date&order=asc";
    return this.getPosts(url);
  }

  getPersonal(catid:any){
    let url:string = this._global.server + "personal?categories="+ catid + "&filter[orderby]=date&order=asc";
    return this.getPosts(url);
  }

  getBasSidaCategory(catid:number){
    let url:string = this._global.server +"bassida?categories=" +catid +"&order=asc"; // + "&filter[orderby]=date";
     console.log("getBasSidaCategory URL: " + url);
    return this.getPosts(url);
  }

  getBasSidaByNamn(sidnamn:string){
    let url:string = this._global.server +"main_page?slug=" +sidnamn ;

    return this.getPosts(url);
  }

  getBasSidaByID(id:number){
    let url:string = this._global.server +"bassida/" +id ;
    return this.getPosts(url);
  }

  getPageSlug(slug:any){
    let url:string = this._global.server +"main_page?slug="+slug;
    return this.getPosts(url);
  }

  getKontaktPageSlug(slug:any){
    let url:string = this._global.server +"kontaktsida?slug="+slug;
    return this.getPosts(url);
  }

  getListaByCategory(catid:number){
    let url:string = this._global.server +"listblock?categories=" +catid +"&order=asc"; // + "&filter[orderby]=date";
     console.log("getListaByCategory URL: " + url);
    return this.getPosts(url);
  }

  getAktuelltList(){
    let url:string = this._global.server +"aktuellt";
    return this.getPosts(url);
  }

  postOffertForm(formdata:any){
    let url:string = this._global.postserver +"offert/send";
     console.log("postOffertForm URL: " + url);
     console.log(formdata);
    return this.doPostFile(url,formdata);
  }

  postKontaktForm(formdata:any){
    let url:string = this._global.postserver +"kontakta/send";
     console.log("postKontaktForm URL: " + url);
     console.log(formdata);
    return this.doPost(url,formdata);
  }

  postFileForm(formdata:FormData){
    let url:string = this._global.postserver +"ladda/send";
     console.log("postKontaktForm URL: " + url);
     console.log(formdata);
    return this.doPostFile(url,formdata);
  }
}

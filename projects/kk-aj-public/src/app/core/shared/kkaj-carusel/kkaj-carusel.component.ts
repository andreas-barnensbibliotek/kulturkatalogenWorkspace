import { Ifavoobj } from './../../interface/Ifavoobj';
import { ServerJson } from './../../models/ServerJson';
import { App_Global } from './../../global/app_global';
import { KatalogenApiService } from './../../services/katalogenApi/katalogen-api.service';
import { clsPostDataV2 } from './../../models/clsPostData-v2';
import { IpostSearchV2 } from './../../interface/ipost-search-v2';

import { AjApiServicesService } from 'aj-api-services';
import { Component, Input, OnInit, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-kkaj-carusel',
  templateUrl: './kkaj-carusel.component.html',
  styleUrls: ['./kkaj-carusel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KkajCaruselComponent implements OnInit {

  @Input() CaruselData!:clsPostDataV2;

  mainCaruselData?:any = [];
  mellan?:any=[];

  constructor(private wpApi:KatalogenApiService, private glb:App_Global, private renderer: Renderer2,  private cd:ChangeDetectorRef, private _favo:ServerJson) { }

  ngOnInit(): void {
    // this.getCaruselData(this.CaruselData)
    this.getMaindata(this.CaruselData)

  }


  // getCaruselData(CData:IpostSearchV2){

  //   this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
  //     this.mellan = Response;
  //     this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista
  //     this.cd.detectChanges();
  //   })
  // }



  getMaindata(CData:IpostSearchV2){
    let storageItem: string = this.getSearchVal(CData);

    if(this.glb.isEmptyObj(localStorage.getItem(storageItem)) || !this.glb.showCookies()){

        this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
          this.mellan = Response;
          this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista;
          localStorage.setItem(storageItem, JSON.stringify(this.mainCaruselData))
          this.cd.detectChanges();
        });

    }else{
      let test:any = localStorage.getItem(storageItem);
      this.mainCaruselData = JSON.parse(test);

    }
  }

  getSearchVal(CData:IpostSearchV2){
    let retobj:string= "";

    switch(CData.cmdTyp){
      case "ageList" :
        retobj= "ageList"+ CData.ageList[0];
        break;
      case "arrTypID" :
        retobj= "arrTypID"+ CData.arrTypID;
        break;
      case "konstartID" :
        retobj= "konstartID"+ CData.konstartID;
        break;
      case "konstartIdList" :
        retobj= "konstartIdList"+ CData.konstartIdList[0];
        break;
      case "startYear" :
        retobj= "startYear"+ CData.startYear;
        break;
      case "stoppYear" :
        retobj= "stoppYear"+ CData.stoppYear;
        break;
      case "tagList" :
        retobj= "tagList"+ CData.tagList[0];
        break;
      default :
        retobj= "konstartID4";
          break;
    }

    return retobj;
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  addToFavorit(itm:any):void{
    if(itm){
      this._favo.changefavo(itm);
        // this.mainCaruselData= this._favo.getFavoritLista();
    };
  }

  setFavoClass(arrid:number):boolean{

    return this._favo.setFavoClass(arrid);;
    // return true;
   }

  //  setFavoClass(arrid:number):boolean{
  //   let i = 0;
  //   'let currentobj:Ifavoobj = this.localfavolist.find((e:Ifavoobj) => e.arrid == arrid) as Ifavoobj;
  //   let currentobj:any = this.localfavolist.indexOf(e.arrid); ((e:Ifavoobj) => e.arrid == arrid) as Ifavoobj;
  //   console.log(i += 1);
  //   let retobj: boolean= false;
  //   if (currentobj){
  //     retobj = currentobj.isfavo;
  //   }
  //   return retobj;
  // }

}

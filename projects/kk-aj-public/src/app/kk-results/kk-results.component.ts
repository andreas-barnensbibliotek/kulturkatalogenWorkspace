import { ServerJson } from './../core/models/ServerJson';
import { KatalogenApiService } from './../core/services/katalogenApi/katalogen-api.service';
import { clsPostDataV2 } from './../core/models/clsPostData-v2';
import { IpostSearchV2 } from './../core/interface/ipost-search-v2';
import { ActivatedRoute, Router } from '@angular/router';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kk-results',
  templateUrl: './kk-results.component.html',
  styleUrls: ['./kk-results.component.scss']
})
export class KkResultsComponent implements OnInit {
  scrollPosition!: any;
  postdataV2:IpostSearchV2 = new clsPostDataV2;
  mainCaruselData?:any = [];
  mellan?:any=[];
  isShowingFavo:boolean=false;
  listrubrik:string="";
  isFavoEmpty:boolean=false;

  constructor(private wpApi:KatalogenApiService,
    private glb:App_Global,
    private _favo:ServerJson,
    private ActivatedRoute:ActivatedRoute,
    private _router:Router,
    private titleService: Title) {
  }

  ngOnInit(): void {
    let id:number = 0;
    this.ActivatedRoute.paramMap.subscribe(prams =>{
      if (this._router.url =="/lista/favoriter"){
        this.listrubrik = "Minneslista";
        this.getFavoritLista();

      }else{
        id = Number(prams.get('id'));
        this.listrubrik = "Arrangemangslista"
          this.postdataV2.cmdTyp = "konstartIdList";
          this.postdataV2.konstartIdList.push(id);
          if(id > 0){
            this.getMaindata(this.postdataV2)
          }
          this.glb.currentCategoryID = id;
        }
      }
    );

    this.titleService.setTitle(this.glb.HeadTitleMapper("Lista alla i katagori " + id.toString() ));
  }

  getCaruselData(CData:IpostSearchV2){
    this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
      this.mellan = Response;
      this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista
    });
  }

  getMaindata(CData:IpostSearchV2){
    let storageItem: string = this.getSearchVal(CData);

    if(this.glb.isEmptyObj(localStorage.getItem(storageItem)) || !this.glb.showCookies()){

        this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
          this.mellan = Response;
          this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista
          localStorage.setItem(storageItem, JSON.stringify(this.mainCaruselData))
        });

    }else{
      let sitm:any = localStorage.getItem(storageItem);
      this.mainCaruselData = JSON.parse(sitm);
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

  goBack(): void {
     this._router.navigateByUrl('/');
  }
  noresult(obj:any){
    return this.glb.isEmptyObj(obj);
  }

  getFavoritLista(){
    this.isShowingFavo = true;
    if(this._favo.favoCounter()>0){
      this.mainCaruselData= this._favo.getFavoritLista();
      this.isFavoEmpty = false;
    }else{
      this.isFavoEmpty = true;
    }
  }

  addToFavorit(itm:any):void{
    if(itm){
      this._favo.changefavo(itm);
      if (this.isShowingFavo){
        if(this._favo.favoCounter()>0){
          this.mainCaruselData= this._favo.getFavoritLista();
          this.isFavoEmpty = false;
        }else{
          this.isFavoEmpty = true;
        }
      }
    };
  }
  testar(){
    alert("nu!");
  }

  setFavoClass(arrid:number):boolean{
  return this._favo.setFavoClass(arrid);

  }

  printList():void{
    const printContent = document.getElementById("listprintcontainer");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt!.document.write("<div><h1>Skriv ut</h1></div>");
    WindowPrt!.document.write(printContent!.innerHTML);
    WindowPrt!.document.write('<link rel="stylesheet" type="text/css" href="/assets/css/bootstrap4.min.css">');
    WindowPrt!.document.write('<link rel="stylesheet" type="text/css" href="/assets/css/printlist.css">');
    // WindowPrt!.document.close();
    // WindowPrt!.focus();
    // WindowPrt!.print();
    // WindowPrt!.close();
  }
}

import { Ifavoobj } from './../core/interface/Ifavoobj';
import { ServerJson } from './../core/models/ServerJson';
import { KatalogenApiService } from './../core/services/katalogenApi/katalogen-api.service';
import { clsPostDataV2 } from './../core/models/clsPostData-v2';
import { IpostSearchV2 } from './../core/interface/ipost-search-v2';
import { NavigationServiceService } from './../core/services/NavigationService/navigation-service.service'
import { AjApiServicesService } from 'aj-api-services';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
// import { Global } from '../core/models/global';

import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { jsonpFactory } from '@angular/http/src/http_module';

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
  // favolist:Array<Ifavoobj>=[];

  constructor(private wpApi:KatalogenApiService,
    private glb:App_Global,
    private _favo:ServerJson,
    private ActivatedRoute:ActivatedRoute,
    private _router:Router,
    private titleService: Title) {
    // this._router.events.pipe(
    //   filter(e => e instanceof Scroll)
    // ).subscribe(e => {
    //   if ((e as Scroll).position) {
    //     this.scrollPosition = (e as Scroll).position;
    //   } else {
    //     this.scrollPosition = [0, 0];
    //   }
    // });
   // window.scrollTo(500, 1000);
// this.viewportScroller.scrollToPosition(this.scrollPosition);
    console.log("position: " + this.scrollPosition)
  }

  ngAfterViewInit() {
    console.log("position: " + this.scrollPosition)

  }

  ngOnInit(): void {
    let id:number = 0;
    this.ActivatedRoute.paramMap.subscribe(prams =>{
      console.log("kolla: " + JSON.stringify(prams))
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

    // this.favolist = this._favo.favolist;
    this.titleService.setTitle(this.glb.HeadTitleMapper("Lista alla i katagori " + id.toString() ));

  }
  getCaruselData(CData:IpostSearchV2){

    this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
      this.mellan = Response;
      this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista
    })

    // this.ajApi.searchArrangemang(CData).subscribe(Response => {
    //   this.mainCaruselData = Response;
    //           // this.SpinnerLoader = false;

    // });
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
  // getCaruselData2(CData:any){

  //   let cardata = {
  //     "cmdTyp": "",
  //     "arrTypID": 0,
  //     "konstartID": CData,
  //     "startYear":0,
  //     "stoppYear": 0
  //   }

  //   this.ajApi.searchArrangemang(cardata).subscribe(Response => {
  //     this.mainCaruselData = Response;
  //             // this.SpinnerLoader = false;

  //   });
  // }

  goBack(): void {
    // this.navBack.back();
    console.log('/#gotoCat'+ this.glb.currentCategoryID);
     this._router.navigateByUrl('/');
   // this.location.back();
  }
  noresult(obj:any){
    return this.glb.isEmptyObj(obj);
  }

  getFavoritLista(){
    // let favoListan:any = localStorage.getItem('favoritStorageItem');
    // if(favoListan){
    //   this.mainCaruselData = JSON.parse(favoListan);
    // }else{    //   [];
    // }
    this.isShowingFavo = true;
    this.mainCaruselData= this._favo.getFavoritLista()


  }

  addToFavorit(itm:any):void{
    if(itm){
      this._favo.changefavo(itm);
      if (this.isShowingFavo){
        this.mainCaruselData= this._favo.getFavoritLista()
      }
    };
  }
  testar(){
    alert("nu!");
  }

setFavoClass(arrid:number):boolean{

 return this._favo.setFavoClass(arrid)
  // let currentobj:Ifavoobj = this.favolist.find((e:Ifavoobj) => e.arrid == arrid) as Ifavoobj;
  // let retobj: boolean= false;
  // if (currentobj){
  //   retobj = currentobj.isfavo
  // }
  // return retobj;
}

  // addfavo(itm:any){
  //   let t:Ifavoobj= {
  //     isfavo : true,
  //     arrid: itm.ansokningid
  //   };
  //   this.favolist[itm.ansokningid] = t;
  //   console.log("click add");
  //   this._favo.addFavoritToStorage(itm);
  // }

  // delfavo(itmId:number){
  //   this.favolist.splice(itmId,1);
  //   console.log("click delete");
  //   this._favo.delFavoritFromStorage(itmId);
  // }


  // scroll(){
  //   //this.scroll('gotoCat'+ 2);
  // }

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

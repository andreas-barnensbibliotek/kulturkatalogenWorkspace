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

  constructor(private wpApi:KatalogenApiService, private glb:App_Global,private viewportScroller: ViewportScroller, private ActivatedRoute:ActivatedRoute, private _router:Router, private location:Location,  private titleService: Title,  private navBack:NavigationServiceService) {
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
     id = Number(prams.get('id'));
     this.postdataV2.cmdTyp = "konstartIdList";
     this.postdataV2.konstartIdList.push(id);
      if(id > 0){
       this.getMaindata(this.postdataV2)
      }
      this.glb.currentCategoryID = id;
    });


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
}

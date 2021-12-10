import { NavigationServiceService } from './../core/services/NavigationService/navigation-service.service'
import { AjApiServicesService } from 'aj-api-services';
import { ActivatedRoute, Router } from '@angular/router';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Global } from '../core/models/global';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kk-results',
  templateUrl: './kk-results.component.html',
  styleUrls: ['./kk-results.component.scss']
})
export class KkResultsComponent implements OnInit {

  mainCaruselData?:any = [];

  constructor(private ajApi:AjApiServicesService, private agbl:App_Global, private ActivatedRoute:ActivatedRoute, private _router:Router, private location:Location,  private titleService: Title,  private navBack:NavigationServiceService) {

  }

  ngOnInit(): void {
    let id:number = 0;
    this.ActivatedRoute.paramMap.subscribe(prams =>{
     id = Number(prams.get('id'));
      if(id > 0){
       this.getCaruselData(id)
      }
    });
    this.titleService.setTitle(this.agbl.HeadTitleMapper("Lista alla i katagori " + id.toString() ));
  }

  getCaruselData(CData:any){

    let cardata = {
      "cmdTyp": "",
      "arrTypID": 0,
      "konstartID": CData,
      "startYear":0,
      "stoppYear": 0
    }

    this.ajApi.searchArrangemang(cardata).subscribe(Response => {
      this.mainCaruselData = Response;
              // this.SpinnerLoader = false;

    });
  }

  goBack(): void {
    // this.navBack.back();
    this._router.navigateByUrl('/')
   // this.location.back();
 }
}

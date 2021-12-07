import { App_Global } from './../core/global/app_global';
import { AjApiServicesService } from 'aj-api-services';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kk-start',
  templateUrl: './kk-start.component.html',
  styleUrls: ['./kk-start.component.scss']
})
export class KkStartComponent implements OnInit {
  title ="Kulturkatalogen Väst - Version 3.0.1"
  mainPageData?:any=[];


  constructor(private ajApi :AjApiServicesService, private _router:Router, private glb:App_Global,  private titleService: Title ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.glb.HeadTitleMapper("Start"));

  }


  getMaindata(searchform:FormData){

    // this.ajApi.searchArrangemang(searchform).subscribe(Response => {
    //   if((Object.keys(Response).length ===0)){
    //     this._router.navigateByUrl("/404");
    //   }
    //   this.mainPageData = Response;
    //           // this.SpinnerLoader = false;

    // });
  }
}

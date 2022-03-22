import { App_Global } from './../../global/app_global';
import { KatalogenApiService } from './../../services/katalogenApi/katalogen-api.service';
import { clsPostDataV2 } from './../../models/clsPostData-v2';
import { IpostSearchV2 } from './../../interface/ipost-search-v2';

import { AjApiServicesService } from 'aj-api-services';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-kkaj-carusel',
  templateUrl: './kkaj-carusel.component.html',
  styleUrls: ['./kkaj-carusel.component.scss']
})
export class KkajCaruselComponent implements OnInit {

  @Input() CaruselData!:clsPostDataV2;

  mainCaruselData?:any = [];
  mellan?:any=[];

  constructor(private wpApi:KatalogenApiService, private glb:App_Global, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getCaruselData(this.CaruselData)
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

  // getCaruselData2(CData:any){

  //   let cardata = {
  //     "cmdTyp": "",
  //     "arrTypID": 0,
  //     "konstartID": CData,
  //     "startYear":0,
  //     "stoppYear": 0
  //   }

  //   this.ajApi.searchArrangemang(CData).subscribe(Response => {
  //     this.mainCaruselData = Response;
  //             // this.SpinnerLoader = false;

  //   });
  // }

  ngAfterViewInit(){


  }
  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}

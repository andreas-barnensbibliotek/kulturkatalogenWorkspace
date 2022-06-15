import { KatalogenApiService } from './../../core/services/katalogenApi/katalogen-api.service';
import { Title, Meta } from '@angular/platform-browser';
import { App_Global } from './../../core/global/app_global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-arr-form',
  templateUrl: './main-arr-form.component.html',
  styleUrls: ['./main-arr-form.component.scss']
})
export class MainArrFormComponent implements OnInit {


  title ="Kulturkatalogen Väst - Version 3.0.1"
  mainPageData?:any=[];
  // showList:number[] =[0];
  pagejson?:any=[];
  spinner:boolean= true;

  constructor(private gbl:App_Global,
    private titleService: Title,
    private metaService: Meta,
    private wpApi:KatalogenApiService,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.gbl.HeadTitleMapper("Ansök till kulturkatalogen väst!"));
    this.metaService.updateTag({
      name: "description" , content: "Detta är Arrangörsformuläret ändrat från servern :)"
    })
    this.loadPageData("ansok");

  }

  loadPageData(arrid:string){
    this.wpApi.getPageByName(arrid).subscribe(Response => {
      this.pagejson = Response;
      this.spinner = false;
    })
  }
}

import { KatalogenApiService } from './../../core/services/katalogenApi/katalogen-api.service';
import { Title, Meta } from '@angular/platform-browser';
import { App_Global } from './../../core/global/app_global';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  pagejsonAsync:any;
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
    this.loadPageDataAsync("ansok");
  }

  loadPageDataAsync(arrid:string){
    this.pagejsonAsync = this.wpApi.getPageByName(arrid).pipe(
      map(data => data.sections)
    ) as Observable<any>;

    this.pagejsonAsync.subscribe((data: any) => {
      localStorage["cacheArr"] = JSON.stringify(data)
      this.spinner = false;
    });

    this.pagejsonAsync = this.pagejsonAsync.pipe(
      startWith(JSON.parse(localStorage["cacheArr"]|| '[]'))
    );
  }

  // loadPageData(arrid:string){
  //   this.wpApi.getPageByName(arrid).subscribe(Response => {
  //     this.pagejson = Response;

  //   })
  // }
}

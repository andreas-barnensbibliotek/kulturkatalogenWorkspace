import { IpostSearchV2 } from './../core/interface/ipost-search-v2';

import { KatalogenApiService } from './../core/services/katalogenApi/katalogen-api.service';
import { ViewportScroller } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Pipe } from '@angular/core';
import { response } from 'express';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-kkaj-start',
  templateUrl: './kkaj-start.component.html',
  styleUrls: ['./kkaj-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KkajStartComponent implements OnInit {

  title ="Kulturkatalogen Väst - Version 3.0.1"
  mainPageData?:any=[];
  // showList:number[] =[0];
  pagejson?:any=[];
  spinner:boolean= true;

  constructor(private gbl:App_Global,
    private titleService: Title,
    private cd:ChangeDetectorRef,
    private vpScroller: ViewportScroller,
    private metaService: Meta,
    private wpApi:KatalogenApiService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.gbl.HeadTitleMapper("Start"));
    this.metaService.updateTag({
      name: "description" , content: "Detta är ändrat från servern :)"
    })
    this.loadPageData("Start");
    // this.showList[0]=4;
    // this.showList.push(2);
    // this.showList.push(3);

  }
starttest:any;

loadPageData(arrid:string){
  this.starttest = this.wpApi.getPageByName("start").pipe(
    map(data => data.sections)
  ) as Observable<any>;

  this.starttest.subscribe((data: any) => {
    localStorage["cacheData"] = JSON.stringify(data)
  });

  this.starttest = this.starttest.pipe(
    startWith(JSON.parse(localStorage["cacheData"]|| '[]'))
  );

  //OLD Code utan asyc
  // this.wpApi.getPageByName("start").subscribe(Response => {
  //   this.pagejson = Response;
  //   this.spinner = false;
  //     this.cd.detectChanges();
  // })
}
  ngAfterViewChecked() {

    // tillbaka från detaljvyn scroll
    if(this.gbl.currentCategoryID>0){

      setTimeout(() => {
        this.scroll('gotoCat'+ this.gbl.currentCategoryID);
              // console.log("tillbaka från detaljvyn scroll "+ this.gbl.currentCategoryID)
              this.gbl.currentCategoryID=0;
      }, 500);

        // this.cd.detectChanges(); använd för att inte får expressionchangedAfterItHasbeenCheckedError
    }

  }


  scroll(gotoarrId: string) {
    // console.log("scroll "+ gotoarrId)
    // this.cd.detectChanges();
   this.vpScroller.scrollToAnchor(gotoarrId);
      // document.querySelector(gotoarrId)?.scrollIntoView({behavior: 'smooth'});
      // this.router.navigate([], { fragment: gotoarrId });

  }
  caruselData(valdcmdtyp:string, typ:number){
// console.log(typ);

    let retobj: IpostSearchV2 = {
      cmdTyp: valdcmdtyp,
      freeTextSearch:'',
      arrTypID: 0,
      konstartID: 0,
      startYear: 0,
      stoppYear: 0,
      ageList:[],
      konstartIdList:[typ],
      tagList:[],
      utovareId: 0
    };
   return retobj;

  }
  test(){
    this.scroll('gotoCat'+ 2);
  }
}

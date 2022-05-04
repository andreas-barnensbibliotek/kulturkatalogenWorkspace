import { KatalogenApiService } from './../core/services/katalogenApi/katalogen-api.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-kkaj-start',
  templateUrl: './kkaj-start.component.html',
  styleUrls: ['./kkaj-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KkajStartComponent implements OnInit {

  title ="Kulturkatalogen Väst - Version 3.0.1"
  mainPageData?:any=[];
  showList:number[] =[0];
  pagejson?:any=[];

  constructor(private gbl:App_Global,
    private titleService: Title,
    private cd:ChangeDetectorRef,
    private vpScroller: ViewportScroller,
    private router: Router,
    private wpApi:KatalogenApiService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.gbl.HeadTitleMapper("Start"));
    this.loadPageData("Start");
    this.showList[0]=4;
    this.showList.push(2);
    this.showList.push(3);

  }

loadPageData(arrid:string){

  this.wpApi.getPageByName("start").subscribe(Response => {

    this.pagejson = Response;
    this.cd.detectChanges();

  })
}
  ngAfterViewChecked() {

     //this.cd.detectChanges(); // använd för att inte får expressionchangedAfterItHasbeenCheckedError

    // tillbaka från detaljvyn scroll
    if(this.gbl.currentCategoryID>0){
      this.scroll('gotoCat'+ this.gbl.currentCategoryID);
      console.log("tillbaka från detaljvyn scroll "+ this.gbl.currentCategoryID)
      this.gbl.currentCategoryID=0;
    }
  }

  scroll(gotoarrId: string) {
    console.log("scroll "+ gotoarrId)
    // this.vpScroller.scrollToAnchor(gotoarrId);
      // document.querySelector(gotoarrId)?.scrollIntoView({behavior: 'smooth'});
      this.router.navigate([], { fragment: gotoarrId });
  }
  caruselData(typ:number){
console.log(typ);
    return {
      cmdTyp: 'search',
      freeTextSearch:'',
      arrTypID: 0,
      konstartID: 0,
      startYear: 0,
      stoppYear: 0,
      ageList:[],
      konstartIdList:[typ],
      tagList:[]
    }
  }
  test(){
    this.scroll('gotoCat'+ 4);
  }
}

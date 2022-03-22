import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { App_Global } from './../core/global/app_global';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-kkaj-start',
  templateUrl: './kkaj-start.component.html',
  styleUrls: ['./kkaj-start.component.scss']
})
export class KkajStartComponent implements OnInit {

  title ="Kulturkatalogen Väst - Version 3.0.1"
  mainPageData?:any=[];


  constructor(private gbl:App_Global, private titleService: Title, private cd:ChangeDetectorRef, private vpScroller: ViewportScroller,  private router: Router ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.gbl.HeadTitleMapper("Start"));

  }
test(){
  this.scroll('gotoCat'+ 4);
}

  ngAfterViewChecked() {

    this.cd.detectChanges(); // använd för att inte får expressionchangedAfterItHasbeenCheckedError

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

}

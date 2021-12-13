import { App_Global } from './../core/global/app_global';
import { AjApiServicesService } from 'aj-api-services';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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


  constructor(private gbl:App_Global,  private titleService: Title, private cd:ChangeDetectorRef, ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.gbl.HeadTitleMapper("Start"));

  }

  ngAfterViewChecked() {

    this.cd.detectChanges(); // använd för att inte får expressionchangedAfterItHasbeenCheckedError

    // tillbaka från detaljvyn scroll
    if(this.gbl.currentCategoryID>0){
        this.scroll('#gotoCat'+ this.gbl.currentCategoryID);

        this.gbl.currentCategoryID=0;
    }
  }

  scroll(gotoarrId: string) {
      document.querySelector(gotoarrId)?.scrollIntoView({behavior: 'smooth'});

  }
}

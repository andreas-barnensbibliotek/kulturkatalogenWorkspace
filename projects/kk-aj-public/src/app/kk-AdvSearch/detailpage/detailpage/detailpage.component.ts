import { App_Global } from './../../../core/global/app_global';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
 @Input() detailid:any;
  constructor( private glb:App_Global, private activatedRoute:ActivatedRoute,  private titleService: Title, private location: LocationStrategy) {
  }

  ngOnInit(): void {
    console.log("detta");
    this.activatedRoute.paramMap.subscribe(prams =>{
      this.glb.currentAnsokningid = prams.get('arrid');
      this.glb.currentCategoryID = prams.get('id');
      if (this.glb.currentAnsokningid){
        this.detailid= this.glb.currentAnsokningid;
      }else{
         this.detailid= this.glb.currentCategoryID;
      }
    });
    this.titleService.setTitle(this.glb.HeadTitleMapper("Arrangemang " + this.detailid ));
  }

  goBack(): void {
     this.location.back();
  }

}

import { NavigationServiceService } from './../../core/services/NavigationService/navigation-service.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { App_Global } from './../../core/global/app_global';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-kk-result-details',
  templateUrl: './kk-result-details.component.html',
  styleUrls: ['./kk-result-details.component.scss']
})
export class KkResultDetailsComponent implements OnInit {

  detailid:any;
  constructor( private glb:App_Global, private activatedRoute:ActivatedRoute, private _router:Router, private titleService: Title, private navBack:NavigationServiceService,private location: LocationStrategy) {

  }

  ngOnInit(): void {
console.log("detta");
    this.activatedRoute.paramMap.subscribe(prams =>{
      this.glb.currentAnsokningid = prams.get('arrid');
      this.glb.currentCategoryID = prams.get('id');
      this.detailid= this.glb.currentAnsokningid;
    });
    this.titleService.setTitle(this.glb.HeadTitleMapper("Arrangemang " + this.detailid ));
    // console.log(this.detailpage);
  }

  goBack(): void {
     this._router.navigateByUrl('/lista/' + this.glb.currentCategoryID);
    //  this.navBack.back();
  //this.location.back();
  }

}

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { App_Global } from './../../core/global/app_global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kk-result-details',
  templateUrl: './kk-result-details.component.html',
  styleUrls: ['./kk-result-details.component.scss']
})
export class KkResultDetailsComponent implements OnInit {

  detailid:any;
  constructor(
    private glb:App_Global,
    private activatedRoute:ActivatedRoute,
    private _router:Router,
    private titleService: Title) {
  }

  ngOnInit(): void {
console.log("detta");
    this.activatedRoute.paramMap.subscribe(prams =>{
      this.glb.currentAnsokningid = prams.get('arrid');
      this.glb.currentCategoryID = prams.get('id');
      this.detailid= this.glb.currentAnsokningid;
    });
    this.titleService.setTitle(this.glb.HeadTitleMapper("Arrangemang " + this.detailid ));
  }

  goBack(): void {
     this._router.navigateByUrl('/lista/' + this.glb.currentCategoryID);
  }

}

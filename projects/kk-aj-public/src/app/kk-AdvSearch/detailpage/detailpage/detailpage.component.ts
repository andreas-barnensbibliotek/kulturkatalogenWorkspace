// import { NavigationServiceService } from './../../../core/services/NavigationService/navigation-service.service'
import { App_Global } from './../../../core/global/app_global';
import { Title } from '@angular/platform-browser';
// import { KatalogenApiService } from './../../../core/services/katalogenApi/katalogen-api.service';
// import { Global } from './../../../core/models/global';
import { Component, OnInit, Input } from '@angular/core';
// import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import {  LocationStrategy } from '@angular/common';
// import { map } from 'rxjs/operators';

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
    // console.log(this.detailpage);
  }

  goBack(): void {
    //  this.navBack.back();
    // this._router.navigateByUrl('/')
     this.location.back();
  }
  // gotodetail(url:any){

  //   console.log("funkar detta: " +this.location);
  //   //  this.location.back()
  //   this.glb.blnMainpage= true;
  //   if(url=="#") return false;
  //   this.router.navigateByUrl(url);

  // }

  // like(){
  //   this.likes +=1;
  //   console.log("like");
  //   return false;
  // }

  // scroll(skrivid:any) {
  //   // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  //   document.querySelector(skrivid).scrollIntoView();
  // }
}

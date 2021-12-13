import { NavigationServiceService } from './../../../core/services/NavigationService/navigation-service.service'
import { App_Global } from './../../../core/global/app_global';
import { Title } from '@angular/platform-browser';
import { KatalogenApiService } from './../../../core/services/katalogenApi/katalogen-api.service';
import { Global } from './../../../core/models/global';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap, Router, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  ico_fa_tumbsup = faThumbsUp;
  ico_fa_print = faPrint;
  ico_fa_chevron= faChevronLeft;
  likes:number= 0;

  pagejson:any=[];
  detailpage:any=[];
  currpageSlug:any;
  constructor(private wpApi:KatalogenApiService,private glb:App_Global, private activatedRoute:ActivatedRoute,private router:Router,private location: Location,  private titleService: Title, private navBack:NavigationServiceService) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(prams =>{
      this.glb.currentAnsokningid = prams.get('id');
      if(this.glb.currentAnsokningid){
        this.loadPageData(this.glb.currentAnsokningid);
      }
    });
    // this.detailpage= this.glb.getTextBySkrivid(this.glb.currentAnsokningid);
    // console.log(this.detailpage);
  }

  // ngAfterViewChecked() {
  //   window.scrollTo(0, 0);
  // }

  loadPageData(arrid:string){

    this.wpApi.getByArrId(arrid).subscribe(Response => {

      this.pagejson = Response;

      this.detailpage = this.pagejson.kk_aj_admin.ansokningarlista.ansokningar;
      this.titleService.setTitle(this.glb.HeadTitleMapper(this.detailpage[0].ansokningtitle));
    })
  }


  goBack(): void {
     this.navBack.back();
    // this.location.back();
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

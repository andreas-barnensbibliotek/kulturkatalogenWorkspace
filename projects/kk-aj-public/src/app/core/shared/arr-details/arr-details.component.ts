import { faThumbsUp, faPrint, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { App_Global } from './../../global/app_global';
import { KatalogenApiService } from './../../services/katalogenApi/katalogen-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-arr-details',
  templateUrl: './arr-details.component.html',
  styleUrls: ['./arr-details.component.scss']
})
export class ArrDetailsComponent implements OnInit {
  @Input() detailid!:any;

  ico_fa_tumbsup = faThumbsUp;
  ico_fa_print = faPrint;
  ico_fa_chevron= faChevronLeft;
  likes:number= 0;

  pagejson:any=[];
  detailpage:any=[];
  currpageSlug:any;
  constructor(private wpApi:KatalogenApiService,private glb:App_Global, private activatedRoute:ActivatedRoute,private router:Router,private location: Location) {

  }

  ngOnInit(): void {
    console.log("detta:: " + this.detailid)
      if(this.detailid){
        this.loadPageData(this.detailid);
      }
  }

  // ngAfterViewChecked() {
  //   window.scrollTo(0, 0);
  // }

  loadPageData(arrid:string){

    this.wpApi.getByArrId(arrid).subscribe(Response => {

      this.pagejson = Response;

      this.detailpage = this.pagejson.kk_aj_admin.ansokningarlista.ansokningar;

    })
  }


  goBack(): void {

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

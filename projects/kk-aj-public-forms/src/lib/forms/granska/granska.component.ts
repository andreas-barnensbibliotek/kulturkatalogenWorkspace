import { faThumbsUp, faPrint, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormDataModel } from '../MODELformGroup/FormDataModel';

@Component({
  selector: 'aj-granska',
  templateUrl: './granska.component.html',
  styleUrls: ['./granska.component.scss']
})
export class GranskaComponent implements OnInit {
  @Input('BaseFormModel') GranskaData!:any;

  ico_fa_tumbsup = faThumbsUp;
  ico_fa_print = faPrint;
  ico_fa_chevron= faChevronLeft;
  likes:number= 0;

  pagejson:any=[];
  detailpage:any=[];
  mainObj:any;
  currpageSlug:any;
  MediaUrl:any;
  granskaFrmGrp!:FormGroup
  constructor(private rootformGroup: FormGroupDirective, private fd:FormDataModel) { }

  ngOnInit(): void {
    this.mainObj = this.GranskaData;
    console.log("data: " + this.mainObj.ArrForm.Faktalist.Ovrigt);
    this.granskaFrmGrp = this.rootformGroup.control as FormGroup
    this.MediaUrl = this.fd.previewImg;
  }

  get test(){
    return this.granskaFrmGrp.get("Utovarelist")?.value.fornamn;
  }

  loadPageData(arrid:string){
    this.detailpage=[];
    // this.wpApi.getByArrId(arrid).subscribe(Response => {

    //   this.pagejson = Response;

    //   this.detailpage = this.pagejson.kk_aj_admin.ansokningarlista.ansokningar;
    // })
  }

  goBack(): void {

  }

  changeDetail(id:string){
    this.loadPageData(id);
  }
}

import { Router } from '@angular/router';
import { clsPostDataV2 } from './../../../core/models/clsPostData-v2';
import { IpostSearchV2 } from './../../../core/interface/ipost-search-v2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationStrategy } from '@angular/common';
import { App_Global } from './../../../core/global/app_global';
import { clsAdvFilter } from './../../../core/models/clsAdvFilter';
import { KatalogenApiService } from './../../../core/services/katalogenApi/katalogen-api.service';

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
// import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { IpostSearch } from './../../../core/interface/ipost-search';
import { clsPostData } from './../../../core/models/clsPostData';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  @ViewChild('ngaoutoControll') ngaoutoControll: any;
  public advSearchForm!: FormGroup;

  FgAdvSearch!: FormGroup
  postdataV2:IpostSearchV2 = new clsPostDataV2;
  chkKF:Array<boolean> = new Array;
  chkAge:Array<boolean> = new Array;


  DropdownMenu:boolean=false;
  p:number=1;
  mainPageData:any=[];
  mainCategoryname:any;
  elipsIcon = "" ;//faEllipsisV;
  currarrid:number= 0;
  currfid:number= 0;
  currAgeid:number=0;
  currsearchstr!: string;
  tmpStyles:any;
  resultatantal:any;
  showPageMax:any;
  keyword = 'ansokningtitle';
  autocompletedata:any = [];
  showNoPostToShow:boolean= false;

  ShowSpinner:boolean=true;

  filterMetadata:any= { count: -1 };

  filterterm:clsAdvFilter=new clsAdvFilter
  postdata:IpostSearch = new clsPostData;
  debug:any="test"

  searchdrpTitle:string="Alla arrangemangstyper";

  constructor(
    private wpApi:KatalogenApiService,
    private glb:App_Global,
    private cd:ChangeDetectorRef,
    private location: LocationStrategy,
    private fb: FormBuilder,
    private _router:Router
    ) {
      this.DropdownMenu = false;
      this.showPageMax= glb.showPageMax;
      // history.pushState(null, null, window.location.href);
      // // check if back or forward button is pressed.
      // this.location.onPopState(() => {
      //   history.pushState(null, null, window.location.href);
      // });
  }

  ngOnInit(): void {
    this.chkKF[0] = true;
    this.chkAge[0] = true;
    // this.debug= this.activatedRoute.snapshot.queryParams
    this.init_SearchForm();
    this.spinnerhandler(true);
    this.getpagedata();
    // this.wpApi.currentPageDataHandler.subscribe(()=>{
    //   // handles global events
    // });
    this.DropdownMenu = true;
    this.glb.mainJsonKatalogItemListHandler.subscribe(()=>{
      this.getpagedata();
    });
    // kolla vilken sida i pagern som användes senast och om den inte var från start gå till rätt sida
    if(this.glb.currentpage>=1){
      this.pageChanged(this.glb.currentpage);
    }
  }

init_SearchForm(){
  this.FgAdvSearch = this.fb.group({
    cmdTyp: [''],
    freeTextSearch: [''],
    arrTypID: ['Alla arrangemangstyper'],
    konstartidList: this.fb.array([]),
    ageList:this.fb.array([])
  });

}

  ngAfterViewChecked() {
    this.cd.detectChanges(); // använd för att inte får expressionchangedAfterItHasbeenCheckedError

    // kolla om filter finns använd det isf
    if (this.glb.filterform){
      this.filterterm = this.glb.filterform
    }
    // tillbaka från detaljvyn scroll
    if(this.glb.currentAnsokningid>0){
      this.scroll('#goto'+ this.glb.currentAnsokningid);
      this.glb.currentAnsokningid=0;
    }
  }

  getpagedata(){
    console.log("laddar ny data: ", this.glb.mainJsonKatalogItemList);
    if(this.glb.isEmptyObj(this.glb.mainJsonKatalogItemList)){
      this.resultatantal =0;
      this.loadPageData(this.postdataV2);
    }else{
      //console.log("data finns: ", this.glb.mainJsonKatalogItemList.kk_aj_admin);
      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      this.spinnerhandler(false);
      // console.log(this.glb.showPageMax + " glb.pageSize: "+ this.glb.pageSize);
      // this.mainCategoryname= this.glb.currentCategoryName;
    }
  }

  loadPageData(srhdata:IpostSearchV2){
    this.resetsearch();
    this.spinnerhandler(true);
    this.wpApi.getCoreKatalogList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response;
      // this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount;

      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      console.log("ny data är laddad: ", this.glb.mainJsonKatalogItemList);
      this.spinnerhandler(false);
      this.noresult();
    })
  }

  loadCoreSearchData(srhdata:IpostSearchV2){
    this.resetsearch();
    this.wpApi.getCoreKatalogList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response;
      this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount;
      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.spinnerhandler(false);
    })

  }
  loadFreetextSearchData(srhdata:IpostSearchV2){
    this.wpApi.getCoreFreeSearchList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response;
      this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount;
      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.spinnerhandler(false);
    })
  }

  // loadFreetextSearchData(srhdata:IpostSearch){
  //   this.wpApi.getfreeSearchList(srhdata).subscribe(Response => {
  //     this.glb.mainJsonKatalogItemList = Response
  //     this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount
  //     this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar
  //     this.spinnerhandler(false);
  //   })
  // }

  noresult(){
     this.showNoPostToShow= false;
    let antal:number = Number(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount)

    if(antal<=1){
      if(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar[0].ansokningtitle == "Finns inget att visa"){
        this.showNoPostToShow= true;
      }
    }
  }


  //START  main searchform och textsearch
  resetsearch(){
    this.spinnerhandler(true);
    this.mainPageData=[];
    this.showNoPostToShow = false;
    this.pageChanged(1)
    this.glb.currentpage=0;
  }

  MainSearchFormClick(){
    this.mainPageData=[];
    this.loadPageData(this.postdataV2);
    this.resetAdvsearchform();
    this.showNoPostToShow = false;
    this.scroll('#AnchorSearchlist');
  }

  formFreetextSearchClick(){
    if(this.currsearchstr){
      this.mainPageData=[];
      this.loadFreetextSearchData(this.postdataV2);
      this.scroll('#AnchorSearchlist');
    }
    return false;
  }

  formCoreSearchClick(){
    this.postdataV2 = new clsPostDataV2
    this.postdataV2.arrTypID= this.fixarridValue(this.FgAdvSearch.get("arrTypID")?.value);
    this.postdataV2.freeTextSearch = this.currsearchstr;
    this.postdataV2.ageList = this.FgAdvSearch.get("ageList")?.value;
    this.postdataV2.konstartIdList = this.FgAdvSearch.get("konstartidList")?.value;
    this.mainPageData=[];
    this.loadCoreSearchData(this.postdataV2);
    this.scroll('#AnchorSearchlist');

    return false;
  }

  formArrClick(arrid:number){
    this.currarrid= arrid;
    this.postdataV2.arrTypID = arrid;
  }

  formKonstFormClick(konstformid:number){
    this.currfid= konstformid;
    this.postdataV2.konstartIdList.push(konstformid)
  }

  ageFormClick(ageformStartYear:number,ageformStopYear:number){
    this.currAgeid= ageformStopYear;
    // this.postdataV2.startyear = String(ageformStartYear);
    // this.postdataV2.stopyear = String(ageformStopYear);
  }

//END  main searchform och textsearch

  resetFormClick(){
    this.postdataV2 = new clsPostDataV2;
    this.currarrid = Number(this.postdataV2.arrTypID);
    this.currfid = Number(this.postdataV2.konstartID);
    this.currAgeid= 0;
  }

  resetAdvsearchform(){
    this.filterterm.takhojd ="";
    this.filterterm.bokningsbar="";
    this.filterterm.kostnad=0;
    this.filterterm.morklaggning="";
    this.filterterm.tid=0;
    return false;
  }


  setfilter(){
    this.glb.filterform=  this.filterterm;
    console.log("filter är: " + this.filterterm.kostnad);
  }

  autocompleteGetData(searchobj:IpostSearchV2){
    this.wpApi.getCoreAutoCompleteList(searchobj).subscribe(Response => {
      let tmpobj:any= Response
      this.autocompletedata = tmpobj.kk_aj_admin.ansokningarlista.ansokningar
    })
    // this.wpApi.getfreeSearchList(searchobj).subscribe(Response => {
    //   let tmpobj:any= Response
    //   this.autocompletedata = tmpobj.kk_aj_admin.ansokningarlista.ansokningar
    // })
  }

  selectEvent(item: { ansokningtitle: string; }) {
    this.currsearchstr = item.ansokningtitle
    this.FgAdvSearch.get("freeTextSearch")?.setValue(item.ansokningtitle);
    this.chkAge= this.resetFormArray(this.chkAge);
    this.chkKF= this.resetFormArray(this.chkKF);
    console.log(item.ansokningtitle)
    this.formCoreSearchClick();
    // this.formFreetextSearchClick()
  }

  onChangeSearch(val: string) {
    let tmpauto:IpostSearchV2 = new clsPostDataV2
    tmpauto.freeTextSearch= val;
    // let tmpauto:IpostSearch = new clsPostData
    // tmpauto.searchstr= val;
    this.currsearchstr = val;
    this.FgAdvSearch.get("freeTextSearch")?.patchValue(val);
    this.autocompleteGetData(tmpauto);
    // this.formCoreSearchClick();
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  onCleared(){
    // this.FgAdvSearch.get("freeTextSearch")?.setValue('');
    this.currsearchstr ="";
    this.formCoreSearchClick();
    this.ngaoutoControll.close();
    // this.init_SearchForm()
  }

  onFocused(){
    // do something when input is focused
  }
  autofilter(){
    return (items: any) => items
  }
  sorteralista(typ:any){
    console.log("typ: " + typ.target.value);
    this.glb.filterSortera(typ.target.value);
  }

  scroll(skrivid: string) {
    if(!document.querySelector(skrivid)){
      skrivid="#kk_aj_mainFreetextSearchblock";
    };
    document.querySelector(skrivid)?.scrollIntoView({behavior: 'smooth'});
  }

  gotodetail(id:any){
    this.spinnerhandler(false);
    this.glb.currentAnsokningid= id;
     this.glb.showDetailpage();
  }

  pageChanged(event: number){
    this.glb.currentpage = event;
    this.p = event;
  }


  goBack(): void {
    // this._router.navigateByUrl('/lista/' + this.glb.currentCategoryID);
    //  this.navBack.back();
  // this.location.back();
  this._router.navigateByUrl('/');
  }

  onCheckboxChange(e:any, controlname:string) {
    let checkArray = this.FgAdvSearch.get(controlname)?.value;
    let chkBtn:Array<boolean> = new Array;
    if(controlname=="ageList"){
      chkBtn = this.chkAge;
    }else{
      chkBtn = this.chkKF;
    }
    if (e.target.value == "0") {
      checkArray.splice(0,checkArray.length)
      chkBtn.forEach((item: any, i:number) => {
        chkBtn[i] = false;
      });
      chkBtn[0] = true;
      return;
    }
    if (e.target.checked) {
      // checkArray = true;
      checkArray.push(e.target.value);
      chkBtn[e.target.value] = true;
    } else {
      // checkArray = false;
      chkBtn[e.target.value] = false;
      let i: number = 0;
      checkArray.forEach((item: any, index:number) => {
        if (item == e.target.value) {
          checkArray.splice(index, 1);
          return;
        }
        i++;
      } );
    }
    if (checkArray.length==0  ){
      chkBtn[0] = true;
    }else{
      chkBtn[0] = false;
    };
  }

  resetFormArray(chkBtn:any){
    this.FgAdvSearch.get('konstartidList')?.setValue([]);
    this.FgAdvSearch.get('ageList')?.setValue([]);

    chkBtn.forEach((item: any, i:number) => {
      chkBtn[i] = false;
    });
    chkBtn[0] = true;
    return chkBtn;
  }

  fixarridValue(value:any){
    if(value == this.searchdrpTitle){
      value= 0;
    };
    return value;
  }
  spinnerhandler(val:boolean){
    // console.log("hitta hit");
    this.glb.showspinner= val;
    this.ShowSpinner= this.glb.showspinner;
  }
}

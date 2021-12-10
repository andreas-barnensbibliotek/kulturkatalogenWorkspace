import { clsAdvFilter } from './../../../core/models/clsAdvFilter';
import { KatalogenApiService } from './../../../core/services/katalogenApi/katalogen-api.service';
import { LocationStrategy } from '@angular/common';
import { Global } from './../../../core/models/global';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { IpostSearch } from './../../../core/interface/ipost-search';
import { clsPostData } from './../../../core/models/clsPostData';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

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

  constructor(
    private wpApi:KatalogenApiService,
    private glb:Global,
    private cd:ChangeDetectorRef,
    ) {

      this.showPageMax= glb.showPageMax;
      // history.pushState(null, null, window.location.href);
      // // check if back or forward button is pressed.
      // this.location.onPopState(() => {
      //   history.pushState(null, null, window.location.href);
      // });
  }

  ngOnInit(): void {
    // this.debug= this.activatedRoute.snapshot.queryParams
    this.spinnerhandler(true);
    this.getpagedata();
    // this.wpApi.currentPageDataHandler.subscribe(()=>{
    //   // handles global events
    // });
    this.glb.mainJsonKatalogItemListHandler.subscribe(()=>{
      this.getpagedata();
    });

    // kolla vilken sida i pagern som användes senast och om den inte var från start gå till rätt sida
    if(this.glb.currentpage>=1){
      this.pageChanged(this.glb.currentpage);
    }
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
    //console.log("laddar ny data: ", this.glb.mainJsonKatalogItemList);

    if(this.glb.isEmptyObj(this.glb.mainJsonKatalogItemList)){

      this.resultatantal =0;
      this.loadPageData(this.postdata);
    }else{
      //console.log("data finns: ", this.glb.mainJsonKatalogItemList.kk_aj_admin);

      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      this.spinnerhandler(false);
      // console.log(this.glb.showPageMax + " glb.pageSize: "+ this.glb.pageSize);
      // this.mainCategoryname= this.glb.currentCategoryName;
    }
  }

  loadPageData(srhdata:IpostSearch){
    this.resetsearch();
    this.spinnerhandler(true);
    this.wpApi.getKatalogList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response
      // this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount;

      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      console.log("ny data är laddad: ", this.glb.mainJsonKatalogItemList);
      this.spinnerhandler(false);
      this.noresult();
    })
  }

  loadFreetextSearchData(srhdata:IpostSearch){
    this.resetsearch();
    this.wpApi.getfreeSearchList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response
      this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount
      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar
      this.spinnerhandler(false);
    })
  }

  noresult(){
     this.showNoPostToShow= false;
    let antal:number = Number(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount)

    if(antal<=1){
      if(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar[0].ansokningtitle == "Finns inget att visa"){
        this.showNoPostToShow= true
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
    this.loadPageData(this.postdata);
    this.resetAdvsearchform();
    this.showNoPostToShow = false;
    this.scroll('#AnchorSearchlist');
  }

  formFreetextSearchClick(){
    if(this.currsearchstr){
      this.mainPageData=[];
      this.postdata = new clsPostData
      this.postdata.searchstr = this.currsearchstr;

      this.loadFreetextSearchData(this.postdata);
      this.scroll('#AnchorSearchlist');
    }
    return false;
  }

  formArrClick(arrid:number){
    this.currarrid= arrid;
    this.postdata.arrtypid = String(arrid);
  }

  formKonstFormClick(konstformid:number){
    this.currfid= konstformid;
    this.postdata.konstartid = String(konstformid);
  }

  ageFormClick(ageformStartYear:number,ageformStopYear:number){
    this.currAgeid= ageformStopYear;
    this.postdata.startyear = String(ageformStartYear);
    this.postdata.stopyear = String(ageformStopYear);
  }

//END  main searchform och textsearch

  resetFormClick(){
    this.postdata = new clsPostData;
    this.currarrid = Number(this.postdata.arrtypid);
    this.currfid = Number(this.postdata.konstartid);
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

  autocompleteGetData(searchobj:IpostSearch){
    this.wpApi.getfreeSearchList(searchobj).subscribe(Response => {
      let tmpobj:any= Response
      this.autocompletedata = tmpobj.kk_aj_admin.ansokningarlista.ansokningar
    })
  }
  selectEvent(item: { ansokningtitle: string; }) {
    this.currsearchstr = item.ansokningtitle
    console.log(item.ansokningtitle)
    this.formFreetextSearchClick()
  }
  onChangeSearch(val: string) {
    let tmpauto:IpostSearch = new clsPostData
    tmpauto.searchstr= val;
    this.currsearchstr = val;
    this.autocompleteGetData(tmpauto);
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
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

  spinnerhandler(val:boolean){
    console.log("hitta hit");
    this.glb.showspinner= val;
    this.ShowSpinner= this.glb.showspinner;

  }
}

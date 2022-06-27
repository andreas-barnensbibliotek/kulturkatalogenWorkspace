import { Router, NavigationEnd } from '@angular/router';

import { formGlobalsModel } from './../MODELformGroup/formGlobalsModel';
import { getTidigareModule } from './../MODELformGroup/getTidigareModule';

import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormVisaBlockHandlerModel } from './../MODELformGroup/FormVisaBlockHandlerModel';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { formUtovareModel } from '../MODELformGroup/formUtovareModel';
import { formKontaktModel } from '../MODELformGroup/formKontaktModel';
import { KontaktFormValidator } from '../../shared/KontaktFormGroup-Validator';
import { FormDataModel } from '../MODELformGroup/FormDataModel';

@Component({
  selector: 'app-baseform',
  templateUrl: './baseform.component.html',
  styleUrls: ['./baseform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseformComponent implements OnInit, OnChanges {

  BaseRootForm!:FormGroup;
  // ArrForm!:FormGroup;
  isArrDataLoaded:boolean= false;
  visaFaktablock:any=[];

  constructor(
    private _utovareMdl: formUtovareModel,
    private _kontaktMdl: formKontaktModel,
    public _blockMdl: FormVisaBlockHandlerModel,
    public _faktaMdl: FormFaktaModel,
    public _TidigareMdl: getTidigareModule,
    public fb:FormBuilder,
    private ref: ChangeDetectorRef,
    private _frmGlb:formGlobalsModel,
    private _postDataObj:FormDataModel,
    private _router:Router
  ) { }

  ngOnInit(): void {



    this.initFromGroupdata();
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("värden ändras i base: " + changes);
    this.ref.detectChanges();
 }
  initFromGroupdata(){
    this.BaseRootForm = this.fb.group({
      Utovarelist: this.fb.group(this._utovareMdl.genFG),
      Kontakt: this.fb.group(this._kontaktMdl.genFG, {validator: KontaktFormValidator}),
      ArrForm: this.fb.group([])
    });
  }

  onUpload(file: FileQueueObject) {
    console.log("detta:" + file.response);
  }
get arrformobj(){
  return this.BaseRootForm.get("Kontakt");
}
  gettidigare(){
    //hämta utövardatat från apit och patcha utövarlistan
    // this.BaseRootForm.patchValue({Utovarelist:this._utovareMdl.getUtovareData()});
    this._blockMdl.showTidigareUtovare();
  }

  valUtovare(val:number){
    if(val==1){
      this._blockMdl.showNyUtovare();
      this.BaseRootForm.reset();
      this.initFromGroupdata();
    };
    if(val==2){
      this._blockMdl.showValUtovare();
    };

    return false;
  }

  changeUtovareUppgifter(){
    this._blockMdl.showChangeUtovareUppgifter();
  }

  ArrDataLoaded(obj:any){
    console.log("arrtypid: " +obj.arrtypid + " isloaded: " +obj.isloaded);
    this.isArrDataLoaded =obj.isloaded;
    this.showFaktaBlock(obj.arrtypid);

  }

  ShowSteg(val:number){
      if (val==4){
        // this._postDataObj.prepareDataForSubmit(this.BaseRootForm.value);
        this._postDataObj.prepareDataForSubmit(this.BaseRootForm.value);
      }
      this._blockMdl.stegBlock(val)
      window.scroll(0,0)
    return false;
  }

  showFaktaBlock(arrtypid:number){
    this.visaFaktablock[this._frmGlb.faktaTypId.forestallning] = false;
    this.visaFaktablock[this._frmGlb.faktaTypId.utstallning] = false;
    this.visaFaktablock[this._frmGlb.faktaTypId.workshop] = false;
    this.visaFaktablock[this._frmGlb.faktaTypId.besoksmal] = false;
    this.visaFaktablock[this._frmGlb.faktaTypId.skolbio] = false;

    switch ( arrtypid ) {
      case 1:
        this.visaFaktablock[this._frmGlb.faktaTypId.forestallning] = true;
          break;
      case 2:
        this.visaFaktablock[this._frmGlb.faktaTypId.utstallning] = true;
          break;
      case 4:
        this.visaFaktablock[this._frmGlb.faktaTypId.workshop] = true;
          break;
      case 7:
        this.visaFaktablock[this._frmGlb.faktaTypId.besoksmal] = true;
          break;
      case 8:
        this.visaFaktablock[this._frmGlb.faktaTypId.skolbio] = true;
          break;
    }

  }

  // GetTidigareArrangemang(val:number){
  //   console.log("get tidigare: " + val);

  //   if (val>0){

  //     // this.BaseRootForm.removeControl('Arrangemang');
  //     // this.BaseRootForm.addControl('Arrangemang', this.fb.group(this._TidigareMdl.getTidigareArr(7)));
  //     // this.BaseRootForm.addControl('Arrangemang', this._TidigareMdl.getTidigareArr(7));
  //     this._TidigareMdl.getTidigareArr(7); //fyll this._arrMdl.genFG med nya värden från servern!!
  //           // let att= this.ArrForm.get('Arrangemang');
  //     // this.ArrForm.get('Arrangemang')?.patchValue(this._TidigareMdl.getTidigareArr(7));
  //      this.ArrForm.removeControl('Arrangemang');
  //      this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG));
  //     this.ArrForm.removeControl('Faktalist');
  //     this.ArrForm.addControl('Faktalist', this.fb.group(this._TidigareMdl.getTidigareFakta(7)));
  //     // let testar = this._faktaMdl.tmpgenFGBesoksmal;
  //     // testar.AlderFran.forEach((t: any) => {
  //     //   console.log(t);
  //     // });
  //     // this.BaseRootForm.get('Faktalist')?.patchValue(this._faktaMdl.tmpgenFGBesoksmal);
  //   }else{
  //     this._TidigareMdl.ResetArr();
  //     this.ArrForm.removeControl('Arrangemang');
  //     this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG));
  //     this.ArrForm.removeControl('Faktalist');
  //     this.ArrForm.addControl('Faktalist', this.fb.group([]),);
  //   }
  //   this.ref.detectChanges();
  // }

  // ngAfterContentChecked() {
  //   //  this.ref.detectChanges();
  // }

}


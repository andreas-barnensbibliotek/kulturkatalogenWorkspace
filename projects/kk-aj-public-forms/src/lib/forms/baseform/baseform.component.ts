import { getTidigareModule } from './../MODELformGroup/getTidigareModule';

import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormArrangemangModel } from './../MODELformGroup/FormArrangemangModel';
import { FormVisaBlockHandlerModel } from './../MODELformGroup/FormVisaBlockHandlerModel';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { formUtovareModel } from '../MODELformGroup/formUtovareModel';
import { formKontaktModel } from '../MODELformGroup/formKontaktModel';
import { KontaktFormValidator } from '../../shared/KontaktFormGroup-Validator';

@Component({
  selector: 'app-baseform',
  templateUrl: './baseform.component.html',
  styleUrls: ['./baseform.component.scss']
})
export class BaseformComponent implements OnInit {

  BaseRootForm!:FormGroup;


  constructor(
    private _utovareMdl: formUtovareModel,
    private _kontaktMdl: formKontaktModel,
    private _arrMdl:FormArrangemangModel,
    public _blockMdl: FormVisaBlockHandlerModel,
    public _faktaMdl: FormFaktaModel,
    public _TidigareMdl: getTidigareModule,
    public fb:FormBuilder,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.initFromGroupdata();
  }

  initFromGroupdata(){
    this.BaseRootForm = this.fb.group({
      Utovarelist: this.fb.group(this._utovareMdl.genFG),
      Kontakt: this.fb.group(this._kontaktMdl.genFG, {validator: KontaktFormValidator}),
      Arrangemang: null,
      Faktalist:null
    });
    console.log("detta2:" + this.BaseRootForm.get('Kontakt')!.valid );
  }

  onUpload(file: FileQueueObject) {

    console.log("detta:" + file.response);
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

  ShowSteg(val:number){
    if(val==1){
      this.BaseRootForm.removeControl('Arrangemang');
      this.BaseRootForm.addControl('Arrangemang', this.fb.group([]),);
      this.BaseRootForm.removeControl('Faktalist');
      this.BaseRootForm.addControl('Faktalist', this.fb.group([]),);
    }
    if(val==2){
      this.BaseRootForm.removeControl('Arrangemang');
      this.BaseRootForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG),);
    }

    this._blockMdl.stegBlock(val)
    return false;
  }

  showFaktaBlock(arrtypid:number){
    let visaFakta = this.BaseRootForm.get('Arrangemang')!.get('Arrangemangtyp')!.value;



    if(arrtypid == visaFakta){
      // this.BaseRootForm.removeControl('Faktalist');
      // switch ( arrtypid ) {
      //   case 1:
      //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
      //       break;
      //   case 7:
      //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGBesoksmal));
      //       break;
      //   default:
      //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
      //      break;
      // }

      return true;
    }
  }

  GetTidigareArrangemang(val:number){
    console.log("get tidigare: " + val);
    // this.BaseRootForm.removeControl('Arrangemang');
    // this.BaseRootForm.addControl('Arrangemang', this.fb.group(this._TidigareMdl.getTidigareArr(7)));
    // this.BaseRootForm.addControl('Arrangemang', this._TidigareMdl.getTidigareArr(7));
     this.BaseRootForm.get('Arrangemang')?.patchValue(this._TidigareMdl.getTidigareArr(7));
    // this.BaseRootForm.removeControl('Arrangemang');
    // this.BaseRootForm.addControl('Arrangemang', this.fb.group(this._TidigareMdl.getTidigareArr(7)));
    this.BaseRootForm.removeControl('Faktalist');
    this.BaseRootForm.addControl('Faktalist', this.fb.group(this._TidigareMdl.getTidigareFakta(7)));
    // let testar = this._faktaMdl.tmpgenFGBesoksmal;
    // testar.AlderFran.forEach((t: any) => {
    //   console.log(t);
    // });
    // this.BaseRootForm.get('Faktalist')?.patchValue(this._faktaMdl.tmpgenFGBesoksmal);
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  ngAfterViewInit() {
  }
}
// AlderFran:  ["3","4"],
// OvrigaKostnader: 'test',
// Ovrigt: 'test2',
// Exempel: null

import { getTidigareModule } from './../MODELformGroup/getTidigareModule';

import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormArrangemangModel } from './../MODELformGroup/FormArrangemangModel';
import { FormVisaBlockHandlerModel } from './../MODELformGroup/FormVisaBlockHandlerModel';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { formUtovareModel } from '../MODELformGroup/formUtovareModel';
import { formKontaktModel } from '../MODELformGroup/formKontaktModel';
import { KontaktFormValidator } from '../../shared/KontaktFormGroup-Validator';

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

    // this.ArrForm = this.fb.group({
    //   Arrangemang: this.fb.group([]),
    //   Faktalist:this.fb.group([])
    // });


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

  ArrDataLoaded(isloaded:boolean){
    this.isArrDataLoaded =isloaded;
  }

  ShowSteg(val:number){
    // if(val==1){
    //   this._TidigareMdl.ResetArr();
    //   this.ArrForm.removeControl('Arrangemang');
    //   this.ArrForm.addControl('Arrangemang', this.fb.group([]),);
    //   this.ArrForm.removeControl('Faktalist');
    //   this.ArrForm.addControl('Faktalist', this.fb.group([]),);
    // }
    // if(val==2){
    //   this.ArrForm.removeControl('Arrangemang');
    //   this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG),);
    // }

    this._blockMdl.stegBlock(val)
    return false;
  }

  showFaktaBlock(arrtypid:number){
    let test = this.BaseRootForm.get('ArrForm') as FormGroup;


        let visaFakta = test.get('Arrangemang')!.get('Arrangemangtyp')!.value;
console.log("visaFakta--- " + visaFakta)
let ret:boolean= false;

if(arrtypid==visaFakta){
  ret= true;
    }

// if(arrtypid==1){
//   ret= true;
//     }
//     if(arrtypid==2){
//       ret= true;
//     }
//     if(arrtypid==4){
//       ret= true;
//     }
//     if(arrtypid==7){
//       ret= true;
//     }
//     if(arrtypid==8){
//       ret= true;
//     }
    return ret;

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

  ngAfterContentChecked() {
    //  this.ref.detectChanges();
  }
  ngAfterViewInit() {
  }
}
// AlderFran:  ["3","4"],
// OvrigaKostnader: 'test',
// Ovrigt: 'test2',
// Exempel: null
